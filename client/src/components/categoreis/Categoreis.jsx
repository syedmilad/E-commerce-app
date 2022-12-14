import React from 'react'
import { Link } from 'react-router-dom'
import './Categoreis.scss'


const Categoreis = () => {
  return (
    <div className='categoreis'>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Shirt</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">men</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Ludda</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Acceosories</Link>
                </button>
                </div>
        </div>
    </div>
  )
}

export default Categoreis