import {expect, test} from "@playwright/test";

test("Going to Driplane Login URL", async ({page}) => {
    await page.goto("http://localhost:4200/");

    await expect(page).toHaveURL("http://localhost:4200/");
    await expect(page).toHaveTitle("Driplane");
    await page.getByText("Login").click();
    await expect(page).toHaveURL("http://localhost:4200/login");
    await expect(page).toHaveTitle("Driplane - Login");
    await page.getByText("Login").click();
    await expect(page).toHaveURL("http://localhost:4200/login");
    await expect(page).toHaveTitle("Driplane - Login");

})