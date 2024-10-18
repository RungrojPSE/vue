# Vue 3 + TypeScript + Vite

## Serve dist

```bash
cd dist
python -m http.server 8080
# Open in the browser, http://localhost:8080
```

### **When to Use What?**

- **Use `<script setup lang="ts">`** when:

  - You prefer concise and modern syntax.
  - The component logic is simple or uses the Composition API.

- **Use `<script lang="ts">`** when:
  - You are migrating code from Vue 2.
  - You prefer the traditional Options API.
  - The component is large and complex, requiring explicit control over setup and lifecycle hooks.

### Key Features of `<script setup lang="ts">`

- **Simpler and concise:** No need for `defineComponent` or `export default`.
- **Directly usable variables in template:** Everything declared in the `<script setup>` is automatically available in the template.
- **Type inference and better tooling support:** TypeScript works smoothly, with automatic type inference for props, events, and more.
- **Scoped only to the component:** No need to return variables, as everything inside is automatically bound to the component's template.
