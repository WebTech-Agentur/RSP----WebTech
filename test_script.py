from playwright.sync_api import sync_playwright

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        page.goto('http://127.0.0.1:8080/produkte-fa.html')
        page.wait_for_timeout(2000)
        page.screenshot(path='C:/Users/www.markazi.co/.gemini/antigravity/brain/f89fc3db-380b-433b-9926-899d84b06a7b/verify_rtl_products.png')
        browser.close()

capture()
