import React, { useState } from 'react'
import { AlertCircle, AlertTriangle, Check, CheckCircle, Info, Triangle, X } from 'lucide-react'

export function InfoBanner({status="pending",message="I am there for default"}) {
    const [isDisabled,setDiabled] = useState(true);
    const handleInfo = ()=>{
        setDiabled(!isDisabled);
    }
  return (
    <div className={`rounded-md border-l-4 border-black  p-4 ${status==="warning"?"bg-red-500":status=="success"?"bg-green-500":"bg-gray-600"} ${isDisabled?"block":"hidden"}`}>
      <div className="flex items-center justify-between space-x-4">
        <div>
            {
                status === "warning"?<AlertTriangle className="h-6 w-6" />:status === "success"?<CheckCircle className={"h-6 w-6"} />:<AlertCircle className="h-6 w-6" />
            }
        </div>
        <div>
          <p className="text-sm font-medium">
            {message}
          </p>
        </div>
        <div>
          <X onClick={handleInfo} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
