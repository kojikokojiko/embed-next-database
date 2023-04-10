import Navigation from './components/navigateion'
import SupabaseProvider from './components/supabase-provider'
import './globals.css'



// レイアウト
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />

            <main className="flex-1 container max-w-screen-md mx-auto px-5 py-5">{children}</main>

            <footer className="py-5 border-t">
              <div className="text-center text-sm text-gray-500">
                Created By Koji Iwase
              </div>
            </footer>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout