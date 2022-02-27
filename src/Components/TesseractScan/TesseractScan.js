import React, {useState} from 'react'
import { createWorker } from 'tesseract.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { makeStyles } from '@material-ui/core/styles';
import {Button, AppBar, Toolbar, IconButton, Typography, Paper} from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { RiQuillPenLine } from "react-icons/ri";

import './TesseractScan.css'
import upload from '../../media/upload.svg'
import convert from '../../media/Group.png'

import Fade from 'react-reveal/Fade';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#262626'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function TesseractScan() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [copy, setCopy] = useState(false)
    const [text, setText] = useState(true)
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCopyClick = () => {
        setCopy(true);
      };

    const handleCopyClose = () => {
        setCopy(false);
      };

    const [scanText, setScanText] = useState('Scanned Text Will Appear Here. Please be patient, it might take 1-2 mins')
    const [image, setImage] = useState(null)
    const [copied, setCopied] = useState(false)

    const imageUpload = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    const ScanText = () => {
        const worker = createWorker({
            logger: m => console.log(m)
          });
          
          (async () => {
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(image);
            setScanText(text)
            console.log(text);
            await worker.terminate();
          })();
    }

    

    return (
        <div className="tesseractScan">
          <Fade none>
          <div className="textInfo">
          
            <div className="textLeft">
              <img src={convert} alt="" />
            </div>
        
            <div className="textRight">
              <p>
                Too lazy to type in the text? <br/>
                Well, we have it covered for you. Now you can upload an image and extract the text from it. <br />
                Get started by clicking the button below.
              </p>
            </div>
          
          </div>
          
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Extract Text From Image
          </Button>



            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
            <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Extract Text From Image
                </Typography>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
            </Toolbar>
            </AppBar>   
                
            <div className="scanContainer">
                <div className="image_left">

                  <img src={upload} alt="" style={{display: text ? 'block': 'none', width: '300px'}}/>
                  <img src={image} alt="" /> 

                    <label htmlFor="fileUpload" className="custom-file-upload">
                        <input id="fileUpload" type="file" onChange={imageUpload} accept="image/*" name="image" 
                            onClick={() => setText(false)}/>
                        Upload Image
                    </label>
                    
             
                </div>

              <div className="buttonContainer">
                <Button variant="contained" onClick={ScanText}>Scan</Button>
              </div>
                

                <div className="image_right">
                <Paper elevation={3} className="textPaper">
                    <CopyToClipboard text={scanText}
                        onCopy={() => setCopied(true)}>
                            <IconButton aria-label="delete" className="Icon_copy"  onClick={handleCopyClick}>
                                <FileCopyIcon fontSize="small"/>
                            </IconButton>
                    </CopyToClipboard>
                    <p className="scanText">{scanText}</p>
                </Paper>
                    
                </div>
            </div>
            </Dialog>
            <Snackbar open={copy} autoHideDuration={6000} onClose={handleCopyClose}>
                <Alert onClose={handleCopyClose} severity="success" style={{backgroundColor: '#262626', color: '#ec4c4c'}}>
                Copied to Clipboard
                </Alert>
            </Snackbar>
            </Fade>
            
        </div>
    )
}

export default TesseractScan

