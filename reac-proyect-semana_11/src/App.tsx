import './App.css'
import Footer from './public/components/Footer'
import { Header } from './public/components/Header'

function App() {

  return (
    <>
      <Header />
      {/** Caracteristicas */}
      <section className='w-full rounded-md bg-white p-4 shadow-md my-4'>
        <h2 className='text-center font-bold text-3xl mb-4'>Caracteristicas</h2>
        <div className='flex gap-3 justify-between'>
          <div className='flex justify-center items-center'>
            <ul className='flex flex-col items-center'>
              <li>Tipo de lengua
                Amazónica</li>
              <li>Familia Linguística
                Cahuapana</li>
              <li>La lengua shiwilu cuenta con un alfabeto oficial establecido mediante Resolución Ministerial Nº 303-2015-MINEDU, del 12 de junio del 2015, con 18 grafías: a, ch, d, e, i, k, l, m, n, ñ, p, r, s, sh, t, u, w, y. Existen 12 escuelas de educación intercultural bilingüe en la zona.</li>
            </ul>
          </div>
          <img src="https://th.bing.com/th/id/R.d304a1fb879cc6d8481548c05ab1c093?rik=rIygZAps3TygZg&pid=ImgRaw&r=0" alt="" className='rounded-lg hover:scale-105 transition-transform duration-200' />
        </div>
      </section>
      {/*Si se encuentra vigente*/}
      <section className='w-full rounded-md bg-white p-4 shadow-md my-4'>
        <h2 className='text-center font-bold text-3xl mb-4'>Se encuentra vigente</h2>
        <div className='flex gap-3 justify-between'>
          <div className='flex justify-center items-center'>
            <p>La lengua shiwilu solo cuenta con 30 hablantes, todos mayores y ya no se transmite a las nuevas generaciones. Al ser catalogada una lengua casi extinta, dentro de 2 o 3 años dejará de hablarse por completo, según indicó el lingüista Alonso Vásquez Aguilar.</p>
          </div>
          <img src="https://th.bing.com/th/id/OIP.jX3tm9f4OQlNDlV32SG4QwHaFj?w=228&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" className='rounded-lg w-[1000px] h-auto object-fill hover:scale-105 transition-transform duration-200' />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
