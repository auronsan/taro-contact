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

test.describe('Contact Page', () => {
  test('Render Grid Contact Correctly', async ({ page }) => {
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
  });

  test('Add Contact', async ({ page }) => {
    await page.route('*/**/api/contacts', async (route) => {
      await route.fulfill({
        json: {
          data: [],
        },
      });
    });
    await page.goto('/contacts');
    const addContactButton = page.getByTestId('add-contact-button');
    await addContactButton.click();
    const contactForm = page.getByTestId('add-contact-form');
    await expect(contactForm).toBeVisible();
    const firstName = page.getByTestId('add-contact-first-name');
    await expect(firstName).toBeVisible();
    firstName.fill('John');
    const lastName = page.getByTestId('add-contact-last-name');
    await expect(lastName).toBeVisible();
    lastName.fill('Doe');
    const job = page.getByTestId('add-contact-job');
    await expect(job).toBeVisible();
    job.fill('Developer');
    const description = page.getByTestId('add-contact-description');
    await expect(description).toBeVisible();
    description.fill('I am a developer');
    const submitButton = page.getByTestId('add-contact-submit');
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    const toastContainer = page.getByTestId('toast-container');
    await expect(toastContainer).toContainText('Success');

    await page.route('*/**/api/contacts', async (route) => {
      const json = [
        {
          first_name: 'John',
          last_name: 'Doe',
          job: 'Developer',
          id: 1,
          description: 'I am a developer',
        },
      ];
      await route.fulfill({
        json: {
          data: json,
        },
      });
    });

    await page.reload();

    const contactGrid = page.getByTestId('grid-contacts');
    await expect(contactGrid).toContainText('John');
  });

  test('Edit Contact', async ({ page }) => {
    const updatedContact = {
      id: 1,
      first_name: 'John Doe',
      last_name: '',
      job: '',
      description: '',
    };

    await page.route('*/**/api/contacts', async (route) => {
      await route.fulfill({
        json: {
          data: [updatedContact],
        },
      });
    });

    await page.route('*/**/api/contacts/*', async (route, request) => {
      if (request.method() === 'PATCH') {
        const requestBody: any = await request.postData();
        const parsedBody = JSON.parse(requestBody);
        const { id, first_name, last_name, job, description } = parsedBody.info;
        updatedContact.id = id;
        updatedContact.first_name = first_name;
        updatedContact.last_name = last_name;
        updatedContact.job = job;
        updatedContact.description = description;
        await route.fulfill({
          status: 200,
          body: JSON.stringify({
            data: [updatedContact],
          }),
        });
        return;
      }
      await route.fulfill({
        json: {
          data: [updatedContact],
        },
      });
    });

    await page.goto('/contacts');
    const editContactSettingButton = page.getByTestId('edit-setting-contact-button-1');
    await expect(editContactSettingButton).toBeVisible();
    await editContactSettingButton.click();

    const editContactButton = page.getByTestId('edit-contact-button-1');
    await expect(editContactButton).toBeVisible();
    await editContactButton.click();

    const contactForm = page.getByTestId('edit-contact-form');
    await expect(contactForm).toBeVisible();
    const firstName = page.getByTestId('edit-contact-first-name');
    await expect(firstName).toBeVisible();
    firstName.fill('ContactTest');
    const lastName = page.getByTestId('edit-contact-last-name');
    await expect(lastName).toBeVisible();
    lastName.fill('LastContact');
    const jobInput = page.getByTestId('edit-contact-job');
    await expect(jobInput).toBeVisible();
    jobInput.fill('Job Contact');
    const descriptionInput = page.getByTestId('edit-contact-description');
    await expect(descriptionInput).toBeVisible();
    descriptionInput.fill('Desc Contact');

    const submitButton = page.getByTestId('edit-contact-submit');
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    await page.route('*/**/api/contacts', async (route) => {
      await route.fulfill({
        json: {
          data: [updatedContact],
        },
      });
    });

    await page.reload();

    const contactGrid = page.getByTestId('grid-contacts');
    await expect(contactGrid).toContainText('ContactTest');
    await expect(contactGrid).toContainText('LastContact');
    await expect(contactGrid).toContainText('Job Contact');
    await expect(contactGrid).toContainText('Desc Contact');
  });
});
