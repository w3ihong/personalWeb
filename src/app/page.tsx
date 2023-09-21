

export default function Home() {
  return (
    <main>
      <section id ="welcome" className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>Welcome</h1>
      </section>
      <section id="aboutMe" className="flex min-h-screen flex-col md:flex-row items-center justify-center">
        <div className="w-2/5">
          Image
        </div>
        <div className="w-3/5"> 
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section id="projects" className="flex min-h-screen flex-wrap items-center justify-center">
        <h1>Projects</h1>
        <p>
          Kinda empty rn
          make it horizontal scroll
        </p>
      </section>
      <section id="contact" className="flex min-h-screen flex-wrap items-center justify-center">
        <h1>Contact me </h1>
      </section>
    </main>
  )
}
