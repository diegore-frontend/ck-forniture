import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	css: {
		preprocessorOptions: {
			includePaths: ['node_modules'],
			scss: {
				additionalData: `@import "@thcode-society/thc-library/dist/mixins/ui-mediaquieries.scss";`
			}
		}
	},
})
