import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About Dew of your Youth" />
      <div>
        <section className="section">
          <h1 className="is-size-2">About DOYY</h1>
          <hr />
        </section>
        <h3>Jacob Shore:</h3>
        <p>
          Shore is a software engineer / web developer, banjo enthusiast,
          husband and father based in Israel.
        </p>
        <p>
          Check him out on{" "}
          <a href="https://github.com/DewofyourYouth">GitHub</a>,{" "}
          <a href="https://codepen.io/JacobShore/">CodePen</a> or{" "}
          <a href="https://www.linkedin.com/in/jacob-shore-2986b315/">
            LinkedIn
          </a>{" "}
          .
        </p>
        <h3>The Name:</h3>
        <p>
          The name is based on a verse in Psalms 110, Dew of your Youth is the
          blog of Jacob Shore. According to the midrash (Rabbinic exposition on
          the Bible) this verse is referring to Abraham - who in his youth went
          against the zeitgeist of his times by rejecting idolatry and spreading
          monotheism.
        </p>
        <p>
          Jacob has taken this verse as a symbolic homage to iconoclasts and
          free thinkers; to those who neglect the dogma of their time and follow
          their own beliefs and convictions.
        </p>
        <p>
          The Hebrew phrase for Dew of your Youth (טל ילדתיך) is also the
          numeric value of his full Hebrew name יעקב אפרים.
        </p>
        <h3>The Logo:</h3>
        <p>
          The logo is a slightly stylized spelling of the Hebrew word for{" "}
          <i>dew</i> (טל) in{" "}
          <a href="https://en.wikipedia.org/wiki/Paleo-Hebrew_alphabet">
            Ktav Ivri
          </a>{" "}
        </p>
      </div>
    </Layout>
  )
}

export default About
