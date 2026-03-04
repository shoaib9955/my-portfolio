import { Analytics } from '@vercel/analytics/react';

function App() {
  // ... your existing App code
  
  return (
    <ThemeProvider>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Analytics />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}
