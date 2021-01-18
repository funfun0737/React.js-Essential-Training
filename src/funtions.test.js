import { render, screen } from '@testing-library/react';
import RestaurantApp from './RestaurantApp';
import {timesTwo} from "./functions";

test("multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});