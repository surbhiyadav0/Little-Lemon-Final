import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../BookingForm';

// Mock the updateTimes function
const mockUpdateTimes = jest.fn();

const defaultProps = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00'],
  updateTimes: mockUpdateTimes
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    render(<BookingForm {...defaultProps} />);
    
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserve table/i })).toBeInTheDocument();
  });

  test('displays available times in time select', () => {
    render(<BookingForm {...defaultProps} />);
    
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeInTheDocument();
    
    // Check if all available times are present
    defaultProps.availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('calls updateTimes when date changes', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const dateInput = screen.getByLabelText(/date/i);
    const tomorrowString = '2025-12-25'; // Use a fixed date for testing
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    
    await waitFor(() => {
      expect(mockUpdateTimes).toHaveBeenCalled();
      // Check that the function was called with a Date object
      const callArgs = mockUpdateTimes.mock.calls[0];
      expect(callArgs[0]).toBeInstanceOf(Date);
      // Check that the date string matches
      expect(callArgs[0].toISOString().split('T')[0]).toBe(tomorrowString);
    });
  });

  test('shows validation errors for empty required fields', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  test('validates phone number format', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const phoneInput = screen.getByLabelText(/phone number/i);
    fireEvent.change(phoneInput, { target: { value: 'abc' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
    });
  });

  test('validates guest count range', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '15' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
    });
  });

  test('validates name length', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const nameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(nameInput, { target: { value: 'A' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters long/i)).toBeInTheDocument();
    });
  });

  test('validates date is not in the past', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const dateInput = screen.getByLabelText(/date/i);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: yesterdayString } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
    });
  });

  test('submits form successfully with valid data', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    render(<BookingForm {...defaultProps} />);
    
    // Fill in all required fields with valid data
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: tomorrowString } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '1234567890' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument();
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', expect.objectContaining({
        date: tomorrowString,
        time: '18:00',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890'
      }));
    });
    
    consoleSpy.mockRestore();
  });

  test('clears errors when user starts typing', async () => {
    render(<BookingForm {...defaultProps} />);
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
    
    const nameInput = screen.getByLabelText(/full name/i);
    fireEvent.change(nameInput, { target: { value: 'John' } });
    
    await waitFor(() => {
      expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    });
  });

  test('resets form after successful submission', async () => {
    render(<BookingForm {...defaultProps} />);
    
    // Fill in form and submit
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: tomorrowString } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '1234567890' } });
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument();
    });
    
    // Wait for form reset (3 seconds)
    await waitFor(() => {
      expect(screen.getByLabelText(/date/i)).toHaveValue('');
      expect(screen.getByLabelText(/time/i)).toHaveValue('');
      expect(screen.getByLabelText(/full name/i)).toHaveValue('');
      expect(screen.getByLabelText(/email/i)).toHaveValue('');
      expect(screen.getByLabelText(/phone number/i)).toHaveValue('');
    }, { timeout: 4000 });
  });
});
