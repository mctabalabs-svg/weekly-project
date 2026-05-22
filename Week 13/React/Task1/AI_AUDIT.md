Where did you place the temperature state and why?
    -I placed the temperature state in TemperaturePage because it is the common parent of TemperatureInput and TemperatureDisplay. This keeps the shared state centralized and allows both child components to update and render from the same source of truth.

When did you reach for Context and when did you reject it?
    -I rejected Context for temperature state because the data is only needed by two closely related components, so prop drilling is simple and clear there. I reached for Context for the theme because theme data may be consumed by multiple components across the app, and Context avoids unnecessary prop drilling for those values.