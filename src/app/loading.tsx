export default function LoadingPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 min-h-[60vh]">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-juno-dark-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-dark-400">Loading...</p>
      </div>
    </main>
  )
}
