import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleDownload = (pdfPath: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Guías Académicas</h1>
          <p>
            Descarga la Guía según tu carrera y preparate para el examen.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Sexto Administración y Sexto Perito Contador</h2>
          <p>Matemática y Matemática financiera</p>
          <ul>
            <li>
              <a href="/pdfs/guia-administracion.pdf" download="guia-administracion.pdf">
                <img className="logo" src={viteLogo} alt="" />
                Descargar guia de Sexto Administración
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Quinto Bachillerato</h2>
          <p>Matemática y Fisica</p>
          <ul>
            <li>
              <a href="/pdfs/guia-quinto-bachillerato.pdf" download="guia-quinto-bachillerato.pdf">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Descargar guia de Quinto Bachillerato
              </a>
            </li>
          </ul>
        </div>

        <div id="magisterio">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Sexto Magisterio</h2>
          <p>Matemática</p>
          <ul>
            <li>
              <button 
                type="button" 
                className="download-button"
                onClick={() => handleDownload('/pdfs/guia-magisterio.pdf', 'guia-magisterio.pdf')}
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Descargar guia de Sexto Magisterio
              </button>
            </li>
          </ul>
        </div>

        <div id="magisterio">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Quinto Bachillerato</h2>
          <p>Matemática y Fisica</p>
          <ul>
            <li>
              <a href="/pdfs/guia-quinto-bachillerato.pdf" download="guia-quinto-bachillerato.pdf">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                Descargar guia de Quinto Bachillerato
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
