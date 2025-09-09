import { ThemeProvider } from "@emotion/react";
import {
  RenderOptions,
  render,
  screen,
  act,
  waitFor,
  userEvent,
} from "@testing-library/react-native";

import { darkColorSchema, theme } from "../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const renderWithProviders = (
  Component: React.ReactElement,
  options?: RenderOptions
) => {
  return render(
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider
          theme={{
            ...theme,
            colors: darkColorSchema,
          }}
        >
          {Component}
        </ThemeProvider>
      </QueryClientProvider>
    </>,
    options
  );
};

export { renderWithProviders, act, waitFor, screen, userEvent };
