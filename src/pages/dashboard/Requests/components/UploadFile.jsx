import { LoadingButton } from "@mui/lab"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import { toast } from "react-toastify"
import TextInput from "../../../../components/TextInput"
import { uploadDocs } from "../../../../api/requests"


function returnTitle(type){
    if(type === "calibration") return "Calibration Bill"
    else if(type === "demand") return "Demand Note"
    else return "Certificate"
}

export const UploadFile = ({open, close, type, data = null, setRequest}) => {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  async function submit(e){
    setLoading(true)
    e.preventDefault()
    console.log(data)
    const formData = new FormData()
    formData.append("image", file)
    formData.append("id", data?._id)

    try{
      const res = await uploadDocs(formData, type)
      setRequest(state => ({...state, [type]: state[type].concat(res.data)}))

      if(res?.error) toast.error(res?.message)
      else {
        toast.success(res?.message)
        close()
      }

      setLoading(false)
    }
    catch(err){
      if(err?.error) toast.error(err?.message)
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Upload {returnTitle(type)}</DialogTitle>
      <DialogContent>
        <form className="w-[500px]" onSubmit={submit}>
            <TextInput
                type="file"
                setValue={(e) => setFile(e.target.files[0])}
                className={
                    "bg-transparent border border-solid border-slate-500 rounded-md cursor-pointer mb-5"
                }
            />
            <DialogActions>
                <Button onClick={close}>Close</Button>
                <LoadingButton
                    loading={loading}
                    type="submit"
                    variant="contained">
                        Upload
                </LoadingButton>
            </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}