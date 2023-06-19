import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { homescreenPrompt } from "../../actions"
import Notification from "../section-components/Notification"
import TransitionsModal from "../section-components/Login"

class Navbar extends Component {
  showAddToHomeScreen() {
    const value = setTimeout(() => {
      window.addEventListener("beforeinstallprompt", (event) => {
        event.prompt()
        this.props.homescreenPrompt(event)
      })
    }, 3000)
    clearInterval(value)
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/"
    let imgattr = "logo"
    let anchor = "#"
    return (
      <nav className='navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top'>
        <div className='container nav-container'>
          {this.props.displayNotification && (
            <Notification notification={this.props.notification} />
          )}
          {this.showAddToHomeScreen()}
          <div className='responsive-mobile-menu'>
            <div className='mobile-logo'>
              <Link to='/'>
                <picture>
                  <source
                    srcSet={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.webp"
                    }
                  />
                  <img
                    src={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                    }
                    alt={imgattr}
                  />
                </picture>
              </Link>
            </div>
            <button
              className='navbar-toggler float-right'
              type='button'
              data-toggle='collapse'
              data-target='#tp_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggle-icon'>
                <span className='line' />
                <span className='line' />
                <span className='line' />
              </span>
            </button>
            <div className='nav-right-content'>
              <ul className='pl-0'>
                <li className='search'>
                  <i className='ti-search' />
                </li>
                <li className='notification'>
                  <a className='signUp-btn' href='#'>
                    <i className='fa fa-user-o' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='collapse navbar-collapse' id='tp_main_menu'>
            <div className='logo-wrapper desktop-logo'>
              <Link
                to='/'
                className='main-logo'
                onClick={() => {
                  if (this.props.deferredPrompt) {
                    this.props.deferredPrompt.prompt()
                    this.props.deferredPrompt.userChoice.then((data) => {
                      console.log(data) // do the math. Show it at the right time
                    })
                  }
                }}
              >
                <picture>
                  <source
                    srcSet={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                    }
                  />
                  <img
                    src={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                    }
                    alt={imgattr}
                  />
                </picture>
              </Link>
              <Link
                to='/'
                className='sticky-logo'
                onClick={() => {
                  if (this.props.deferredPrompt) {
                    this.props.deferredPrompt.prompt()
                    this.props.deferredPrompt.userChoice.then((data) => {
                      console.log(data) // do the math. Show it at the right time
                    })
                  }
                }}
              >
                <picture>
                  <source
                    srcSet={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.webp"
                    }
                    type='image/webp'
                  />
                  <source
                    srcSet={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                    }
                    type='image/png'
                  />
                  <img
                    src={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                    }
                    alt={imgattr}
                  />
                </picture>
              </Link>
            </div>
            <ul className='navbar-nav'>
              <li>
                <Link to='/tours'>All Tours</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/tours/cycle-tours-in-delhi'>Cycle Tours</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      to={"/tours/cycle-tours/shahjahan-tour-delhi-by-cycle"}
                    >
                      Shahjahan Tour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/tours/cycle-tours/raj-tour-delhi-by-cycle"}>
                      Raj Tour
                    </Link>
                  </li>
                  <li>
                    <Link to={"/tours/cycle-tours/yamuna-tour-delhi-by-cycle"}>
                      Yamunu Tour
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/tours/cycle-tours/nizamuddin-tour-delhi-by-cycle"}
                    >
                      Nizamuddin Tour
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/tours/walking-tours-in-delhi'>Walking Tours</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      to={"/tours/walking-tours/old-delhi-tour-delhi-by-cycle"}
                    >
                      Delhi 6 Diaries
                    </Link>
                  </li>
                  <li>
                    <Link to={"/tours/walking-tours/lodhi-tour-delhi-by-cycle"}>
                      Lodhi Walk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/tours/walking-tours/connaught-tour-delhi-by-cycle"}
                    >
                      Connaught Walk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/tours/walking-tours/mehrauli-tour-delhi-by-cycle"}
                    >
                      Mehrauli Walk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/tours/walking-tours/street-food-safari-tour-delhi-by-cycle"
                      }
                    >
                      Street Food Safari
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/tours/bicycle-touring'>Cycling Holidays</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link
                      to={
                        "/tours/bicycle-touring/krishna-trails-taj-mahal-delhi-by-cycle"
                      }
                    >
                      The Krishna's Trails
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/tours/bicycle-touring/golden-triangle-delhi-by-cycle"
                      }
                    >
                      Golden Triangle By Cycle
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/tours/bicycle-touring/jim-corbett-villages-delhi-by-cycle"
                      }
                    >
                      Jim Corbett Villages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "/tours/bicycle-touring/west-coast-ride-delhi-by-cycle"
                      }
                    >
                      West Coast Ride
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              {/* <li>
                                <Link to="/user-profile">User Profile</Link>
                            </li> */}
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='menu-item-has-children'>
                <Link to='/contact'>Contact</Link>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/contact'>Contact Us</Link>
                  </li>
                  <li>
                    <Link to='/faq'>FAQ</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='nav-right-content'>
            <ul>
              {/* <li className='search'>
                <i className='ti-search' />
              </li> */}
              <li className='notification'>
                <a className='signUp-btn' href='#'>
                  <i className='fa fa-user-o' /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <TransitionsModal />
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    displayNotification: state.modal.displayNotification,
    notification: state.modal.notification,
    deferredPrompt: state.auth.deferredPrompt,
  }
}

export default connect(mapStateToProps, { homescreenPrompt })(Navbar)
