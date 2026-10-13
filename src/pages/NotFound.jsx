import { Page, Button } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <Page>
      <section className="page-top relative">
        <div className="aurora absolute inset-0" aria-hidden="true" />
        <div className="container-x relative flex min-h-[70svh] flex-col items-start justify-center py-20">
          <span className="eyebrow mb-6">404</span>
          <h1 className="h-display text-5xl sm:text-7xl">This page is coming soon.</h1>
          <p className="lead mt-6 max-w-lg">Contact Wix Crafters to unlock all pages.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="https://wixcrafters.com" icon="arrow">Visit wixcrafters.com</Button>
            <Button to="/" variant="ghost">Back to home</Button>
          </div>
        </div>
      </section>
    </Page>
  )
}
