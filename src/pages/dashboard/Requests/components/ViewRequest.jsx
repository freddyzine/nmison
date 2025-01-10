import { 
    Slide, AppBar, 
    Toolbar, IconButton, 
    Typography, Dialog, 
    DialogContent, CircularProgress, 
    ListItemText, Grid, DialogActions,
    Button, 
    /*Link*/
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import ImagePreview from '../../../../components/ImagePreview';
import { getRequest } from '../../../../api/requests';
import { Instrument } from './Instrument';
import { UploadFile } from './UploadFile';
import { Review } from './Review';
  
export const ViewRequest = ({open, close, data=null}) => {
  const [loading, setLoading] = useState({
    view: false,
    request_dn: false
  })
  const [upload, setUpload] = useState({ open: false, type: "payment" })
  const [review, setReview] = useState(false)
  const [request, setRequest] = useState(null)

  useEffect(() => {
    setLoading(state => ({...state, view: true}))
    getRequest(data?._id)
      .then(data => {
          if(data?.error) toast.error(data?.message)
          else{
              setRequest(data?.data)
          }
          setLoading(state => ({...state, view: false}))
      })
      .catch(err => {
          if(err?.error) toast.error(err?.message)
          setLoading(state => ({...state, view: false}))
      })
      
  }, [data?._id])

  const attributes = [
    {
        title: "Organization Name",
        value: request?.org_name
    },
    {
        title: "User name",
        value: request?.user?.first_name + " " + request?.user?.last_name
    },
    {
        title: "Email",
        value: request?.email
    },
    {
        title: "Phone Number",
        value: request?.phone_number
    },
    {
        title: "Status",
        value: request?.status
    },
    {
        title: "Address",
        value: request?.address
    },
    {
        title: "Extra Information",
        value: request?.extra_info
    },
    {
        title: "Assigned By",
        value: request?.assign_by ? request?.assign_by?.first_name + " " + request?.assign_by?.last_name : "Not yet assigned"
    },
    {
        title: "Assigned On",
        value: request?.assign_on ? moment(request?.assign_on).format("lll") : "Not Yet Assigned"
    },
    {
        title: "Department",
        value: request?.department?.name || null
    }
  ]

  return(
    <>
      {
        upload.open && 
        <UploadFile 
            open={upload.open} 
            close={() => setUpload(state => ({...state, open: false}))} 
            type={upload.type} 
            data={request} 
            setRequest={setRequest}
        />
      }
      { review && <Review open={review} close={() => setReview(false)} request={request._id} /> }
      <Dialog
        fullScreen
        open={open}
        onClose={close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} color="transparent">
          <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                onClick={close}
                aria-label="close"
            >
                <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Request Details
            </Typography>
              {/* <Button autoFocus color="inherit" onClick={close}>
              save
              </Button> */}
          </Toolbar>
        </AppBar>
        {
          loading.view ? 
          <div className='w-full flex justify-center mx-auto'>
            <CircularProgress />
          </div> :
          <DialogContent>
            <Grid container spacing={2}>
              {
                attributes.map((attribute, i) => (
                  <Grid item xs={8} sm={4} md={4} key={i}>
                    { attribute?.value && <ListItemText primary={attribute.title} secondary={attribute.value} />}
                  </Grid>
                ))
              }
            </Grid>
            <ListItemText primary="Instruments" />
            <Instrument instruments={request?.instrument} />
            <Documents title="Callibration Bill" docs={request?.callibration}type="callibration"/>
            <Documents title="Demand Note" docs={request?.demand} type="demand" />

            <div className='md:w-8/12 my-3'>
              <div className='flex justify-between items-center'>
                <Typography variant="h6">Evidence of payment</Typography>
                <div className='space-x-2'>
                  {/* <Link href='https://login.remita.net/remita/onepage/SON/biller.spa'></Link> */}
                  <Button 
                    onClick={() => window.open("https://login.remita.net/remita/onepage/SON/biller.spa", "_blank")}
                    variant='contained'
                  > Make payment</Button>
                  <Button 
                    onClick={() => setUpload({ type: "payment", open: true })}
                    variant='contained'
                  > Upload Evidence of payment </Button>
                </div>
              </div>
              <div className="w-full grid grid-cols-4 gap-5">
                { request?.payment?.map((file, i) => <ImagePreview item={file}  key={i}/>) }
              </div>
            </div>

            <Documents title="Job Scheduling" docs={request?.schedule} type="schedule" />
            <Documents title="Certificate" docs={request?.certificate}type="certificate" />
          </DialogContent>
        }
        <DialogActions>
          <Button onClick={close}>Close</Button>
          <Button variant='contained' onClick={() => setReview(true)}>Submit Review</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});

function Documents({title, docs, setUpload, enable_upload = false}){
  function handleUpload(){
    setUpload({type: "payment", open: true})
  }

  return(
    <div className='md:w-8/12 my-3'>
      <div className='flex justify-between items-center'>
        <Typography variant="h6">{ title }</Typography>
        { enable_upload && <Button onClick={handleUpload}> Upload { title }</Button> }
      </div>
      <div className="w-full grid grid-cols-4 gap-5">
        { docs?.map((file, i) => <ImagePreview item={file}  key={i}/>) }
      </div>
    </div>
  )
}
