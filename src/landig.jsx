
import { HelpCircle, Flag, MessageSquare, Smartphone } from 'lucide-react'


export default function Component() {
  return (
    <div className="min-h-screen bg-blue-600 relative overflow-hidden">
      {/* Decorative circles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/30"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-end items-center p-4 text-white gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-white/80">
          <Smartphone className="h-5 w-5" />
          Android
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white/80">
          <HelpCircle className="h-5 w-5" />
          Ayuda
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white/80">
          <Flag className="h-5 w-5" />
          Reportar
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white/80">
          <MessageSquare className="h-5 w-5" />
          Foro
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pt-12 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left text-white max-w-2xl">
            <h1 className="text-7xl font-extrabold mb-4 text-white drop-shadow-lg">Refriapp</h1>
            <p className="text-2xl mb-2">Recetas fáciles y deliciosas,</p>
            <p className="text-2xl mb-8">siempre en la palma de tu mano.</p>
            <p className="text-3xl mb-8">Tu asistente culinario personal</p>
            
            {/* Google Play Store Button 
            <Button
              className="bg-black hover:bg-black/90 text-white rounded-lg px-8 py-6 mb-8"
              size="lg"
            >
              <Smartphone className="mr-2 h-6 w-6" />
              Consíguelo en Google Play
            </Button>*/}

            {/* Download Section */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-center lg:justify-start items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5l-5-5h3V9h4v4h3z" />
                </svg>
                Descargar v1.4.5
              </div>
              <p>32.4 MB | Requiere Android 6.0 o superior</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="#" className="hover:underline">Evolución</a>
                <a href="#" className="hover:underline">Antiguas</a>
                <a href="#" className="hover:underline">Ayudante</a>
                <a href="#" className="hover:underline">Android</a>
              </div>
              <p className="text-white/60">MD5: 0e512e6b8f9d5848f919eb0f26b858f</p>
            </div>
          </div>

          {/* App Icon */}
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <img
              src="/placeholder.svg?height=384&width=384"
              alt="Refriapp icon"
              width={384}
              height={384}
              className="w-full h-full object-contain"
         
            />
          </div>
        </div>

        {/* QR Code */}
        <div className="absolute bottom-4 right-4 w-32 h-32 bg-white p-2 rounded-lg">
          <img
            src="/placeholder.svg?height=128&width=128"
            alt="QR Code"
            width={128}
            height={128}
            className="w-full h-full"
          />
        </div>
      </main>
    </div>
  )
}