/* eslint-disable testing-library/prefer-screen-queries */
import { expect, test } from '@playwright/test';

const mockContacts = [
  {
    first_name: 'John',
    last_name: 'Doe',
    job: 'Developer',
    id: 1,
    description: 'Dev',
  },
];

test.describe('Favorite Page', () => {
  test('Test Contact Page Favorite button', async ({ page }) => {
    await page.route('*/**/api/contacts', async (route) => {
      const json = mockContacts;
      await route.fulfill({
        json: {
          data: json,
        },
      });
    });

    await page.goto('/contacts');

    const contactGrid = page.getByTestId('grid-contacts');
    await expect(contactGrid).toBeVisible();
    const buttonFavorite = page.getByTestId('favorite-contact-add-1');
    const buttonUnfavorite = page.getByTestId('favorite-contact-remove-1');
    await expect(buttonFavorite).toBeVisible();
    await expect(buttonUnfavorite).not.toBeVisible();
    await buttonFavorite.click();
    await expect(buttonUnfavorite).toBeVisible();
    await expect(buttonFavorite).not.toBeVisible();
    await buttonUnfavorite.click();
    await expect(buttonFavorite).toBeVisible();
    await expect(buttonUnfavorite).not.toBeVisible();
  });

  test('Test Favorite Contact Page', async ({ page }) => {
    await page.route('*/**/api/contacts', async (route) => {
      const json = mockContacts;
      await route.fulfill({
        json: {
          data: json,
        },
      });
    });

    await page.goto('/contacts');
    const contactGrid = page.getByTestId('grid-contacts');
    await expect(contactGrid).toBeVisible();
    const buttonFavorite = page.getByTestId('favorite-contact-add-1');
    await expect(buttonFavorite).toBeVisible();
    await buttonFavorite.click();

    await page.evaluate(() => localStorage.setItem('favorites', "['1']"), '1');
    await page.goto('/contacts?tab-contact=favorite');
    const contactFavoriteGrid = page.getByTestId('grid-contacts');
    await expect(contactFavoriteGrid).toBeVisible();
    const buttonUnfavorite = page.getByTestId('favorite-contact-remove-1');
    await expect(buttonUnfavorite).toBeVisible();
  });
});
