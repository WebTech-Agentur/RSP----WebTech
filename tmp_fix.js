const fs = require('fs');

// Apply no-line class to specific headings in Anwendungsbereiche pages
const pages = ['anwendungsbereiche.html', 'anwendungsbereiche-en.html', 'anwendungsbereiche-fa.html'];
pages.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Targeted replacement for the specific heading
        content = content.replace(/class=\"section-title\"\s+style=\"text-align:\s*(?:left|right);\s*margin-bottom:\s*1rem;\"/g, 'class="section-title no-line" style="text-align: left; margin-bottom: 1rem;"');
        // Special check for Farsi version since it has right alignment
        if (file.includes('-fa')) {
            content = content.replace(/class=\"section-title no-line\"\s+style=\"text-align:\s*left;/g, 'class="section-title no-line" style="text-align: right;');
        }
        fs.writeFileSync(file, content, 'utf8');
        console.log('Applied no-line to: ' + file);
    }
});

// Update cache version to v32 site-wide
const allFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/style\.css(?:\?v=\d+)?/g, 'style.css?v=32');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Cache busted (v32): ' + file);
});
