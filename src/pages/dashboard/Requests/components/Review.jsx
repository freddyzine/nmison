import { useState } from "react";
import { makeReview } from "../../../../api/requests";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating, TextField, /*Typography*/ } from "@mui/material";
//import TextInput from "../../../../components/TextInput";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify"

export function Review({ open, close, request }){
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState("")
  const [improvement, setImprovment] = useState("")
  const [loading, setLoading] = useState(false)

  async function submit(e){
    setLoading(true)
    e.preventDefault()

    try{
      const result = await makeReview({ request, rate, comment, improvement })

      if(result?.error) toast.error(result?.message)
      else {
        toast.success(result?.message)
        close()
      }

      setLoading(false)
    }
    catch(err){
      if(err?.error) toast.error(err?.message)
      setLoading(false)
    }
  }
  return(
    <Dialog open={open} onClose={close}>
      <DialogTitle>Customer review</DialogTitle>
      <DialogContent>
        <DialogContentText>Please give us feedback on your calibration work</DialogContentText>
        <form className="max-w-[500px] space-y-5" onSubmit={submit}>
          <div className="flex w-full justify-center my-5">
            <Rating
              name="rate"
              value={rate}
              size="large"
              onChange={(_, value) => setRate(value)}
            />
          </div>

          <TextField className="w-full" label="Comment" name="comment" multiline rows={4} value={comment} onChange={e => setComment(e.target.value)} />
          <TextField className="w-full" label="Improvement" name="improvement" value={improvement} onChange={e => setImprovment(e.target.value)} multiline rows={2} />
          <DialogActions>
              <Button onClick={close}>Close</Button>
              <LoadingButton
                loading={loading}
                type="submit"
                variant="contained"
              >
                Submit
              </LoadingButton>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}
