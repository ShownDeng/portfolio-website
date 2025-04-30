import { CurveEditClient } from '@/app/curve-edit/[type]/client'

export async function generateStaticParams() {
  return [
    { type: "curve1" },
    { type: "curve2" },
  ]
}

export default function CurveEditPage({ params }: { params: { type: string } }) {
  return <CurveEditClient params={params} />
}