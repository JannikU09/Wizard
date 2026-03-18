"use client"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { createTheme, ThemeProvider } from "@mui/material";

interface ProvidersProps {
    children: React.ReactNode;
}

const theme = createTheme({
    cssVariables: true,
});

export function Providers({ children }: ProvidersProps) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>)
}