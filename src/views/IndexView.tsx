import { useAppStore } from "../stores/useAppStore"

export default function IndexView() {
  
  useAppStore((state) => state.categories)
  return (
    <>
        
    </>
  )
}
