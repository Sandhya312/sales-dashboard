import './App.css'
import { SalesDashboard } from './pages/sales-dashboard'

export default function App() {
  return (
    <main className='relative min-h-screen h-auto min-w-screen flex justify-center items-center'>
      <SalesDashboard/>
      <div className='absolute bottm-5 right-5'>
        </div>
    </main>
  )
}