import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//import { Button } from './Button.js';
import './Membership.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavbarHome from './NavbarHome.js';
gsap.registerPlugin(ScrollTrigger);

export default function Membership() {
    let text = useRef(null);

    useEffect(() => {
        gsap.to(text, {
            duration: 1,
            y: '10',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let cor = useRef(null);
    useEffect(() => {
        gsap.to(cor, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: cor,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);
    let corri = useRef(null);
    useEffect(() => {
        gsap.to(corri, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            stagger: 0.4,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: corri,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    return (
        <>
            <NavbarHome />
            <div className="membership">
                <div className="membership--container">
                    <h1>View Our Plans</h1>
                    <p className="membership--desc">
                        Get Started Today and recieve 25% off your first month{' '}
                    </p>
                    <div
                        className="membership--wrap"
                        ref={(el) => {
                            text = el;
                        }}
                    >
                        <div className="membership--card">
                            <div className="membership--title">
                                <svg
                                    width="100"
                                    height="60"
                                    viewBox="0 0 100 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M90.1639 10.328C87.6465 10.328 85.6557 11.2785 83.6064 12.8375V10.3262C83.6064 4.90393 79.1943 0.491821 73.7703 0.491821C68.3463 0.491821 63.9342 4.90393 63.9342 10.3262V21.9096H36.0656V10.3262C36.0656 4.90393 31.6535 0.491821 26.2295 0.491821C20.8055 0.491821 16.3934 4.90393 16.3934 10.3262V12.8373C14.7541 11.2783 12.3535 10.3278 9.83594 10.3278C4.41211 10.328 0 14.7352 0 20.1512V39.8489C0 45.2647 4.41211 49.6721 9.83613 49.6721C12.3535 49.6721 14.7541 48.7219 16.3936 47.1627V49.6754C16.3936 55.0977 20.8057 59.5082 26.2297 59.5082C31.6537 59.5082 36.0658 55.0977 36.0658 49.6754V38.3034H63.9346V49.6754C63.9346 55.0977 68.3467 59.5082 73.7707 59.5082C79.1947 59.5082 83.6068 55.0977 83.6068 49.6754V47.1627C85.6561 48.7221 87.6467 49.6721 90.1643 49.6721C95.5883 49.6721 100 45.2647 100 39.8489V20.1512C100 14.7352 95.5879 10.328 90.1639 10.328ZM16.3934 39.8489C16.3934 43.4573 13.4518 46.3934 9.83594 46.3934C6.22031 46.3934 3.27852 43.4573 3.27852 39.8489V20.1512C3.27852 16.5428 6.22012 13.6067 9.83594 13.6067C13.4516 13.6067 16.3934 16.5428 16.3934 20.1512V39.8489ZM32.7869 23.4426V36.5575V49.6754C32.7869 53.2887 29.8453 56.2295 26.2295 56.2295C22.6139 56.2295 19.6721 53.2887 19.6721 49.6754V39.8491V20.1512V10.3262C19.6721 6.71136 22.6137 3.77034 26.2295 3.77034C29.8451 3.77034 32.7869 6.71116 32.7869 10.3262V23.4426ZM63.9344 35.0244H36.0656V25.1883H63.9344V35.0244ZM80.3279 20.1512V39.8489V49.6752C80.3279 53.2885 77.3863 56.2293 73.7705 56.2293C70.1549 56.2293 67.2131 53.2885 67.2131 49.6752V36.5573V23.4424V10.3262C67.2131 6.71136 70.1547 3.77034 73.7705 3.77034C77.3861 3.77034 80.3279 6.71116 80.3279 10.3262V20.1512ZM96.7213 39.8489C96.7213 43.4573 93.7797 46.3934 90.1639 46.3934C86.5482 46.3934 83.6064 43.4573 83.6064 39.8489V20.1512C83.6064 16.5428 86.548 13.6067 90.1639 13.6067C93.7795 13.6067 96.7213 16.5428 96.7213 20.1512V39.8489Z"
                                        fill="#028851"
                                    />
                                </svg>

                                <h3 style={{ marginTop: '15px' }}>Beginner</h3>
                            </div>

                            <div className="membership--perk">
                                <h3>
                                    <span>
                                        <sup>$</sup>18/<small>month</small>
                                    </span>
                                </h3>
                            </div>
                            <div className="membership--perk--desc">
                                <ul>
                                    <li>- Single Club Access</li>
                                    <li>- Fitness Assessment</li>
                                    <li>- Basketball Court Access</li>
                                    <li>- One session with personal trainer Monthly</li>
                                </ul>
                            </div>
                            {/* <div className="button--su">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--meduim"
                type="submit"
              >
                Join Now
              </Button>
            </div> */}
                        </div>

                        <div className="membership--card">
                            <div className="membership--title">
                                <svg
                                    width="60"
                                    height="80"
                                    viewBox="0 0 60 80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M51.5273 30.7958C52.4164 22.9752 52.8002 15.1632 52.8002 7.73332C52.9334 5.0666 50.9334 2.53332 48.1334 2.00004C35.8669 -0.66668 23.6002 -0.66668 12.0002 2.00004C9.20016 2.53332 7.20016 5.06676 7.33344 7.73332C7.33344 15.1196 7.83797 22.8838 8.60078 30.6585C3.68672 35.9091 0.666878 42.9518 0.666878 50.6666C0.666878 66.8 13.8669 80 30.0002 80C46.1334 80 59.3334 66.8 59.3334 50.6668C59.3334 43.0189 56.3659 36.0316 51.5273 30.7958ZM30.0002 21.3333C25.9841 21.3333 22.1502 22.1518 18.6559 23.6293C18.3353 19.4005 18.1167 15.4649 18.0002 11.7333C22.1334 11.0666 26.2669 10.6666 30.0002 10.6666C33.7334 10.6666 37.6002 11.0666 42.0002 11.8666C41.8852 15.6611 41.6705 19.556 41.3572 23.6344C37.8595 22.1536 34.0211 21.3333 30.0002 21.3333ZM12.4002 4.66676C23.7334 2.00004 35.6002 2.00004 47.4669 4.66676C48.9336 4.93348 50.1336 6.13348 50.0002 7.60004C50.0002 14.4 49.6002 21.3333 49.0669 28.4C47.6313 27.2038 46.1941 26.1166 44.5659 25.2311C44.3792 25.1235 44.1909 25.0183 44.0017 24.9147C44.4005 19.9883 44.5339 15.3274 44.667 10.6666C44.667 9.99988 44.1338 9.4666 43.6003 9.33332C38.5334 8.40004 34.2669 8.00004 30.0002 8.00004C25.7334 8.00004 21.0669 8.40004 16.4002 9.33332C15.7334 9.4666 15.3334 10 15.3334 10.6666C15.3334 15.0666 15.6002 19.7333 16.1334 24.7999C14.2667 25.8666 12.6667 26.9332 11.0667 28.2666C10.4002 21.3333 10.0002 14.4 10.0002 7.46676C9.86688 6.26676 11.0669 4.93332 12.4002 4.66676ZM30.0002 77.3333C15.3334 77.3333 3.33344 65.3333 3.33344 50.6666C3.33344 35.9999 15.3334 24 30.0002 24C34.085 24 37.9623 24.9319 41.4317 26.5918C41.5448 26.728 41.6909 26.8454 41.8667 26.9333C44.5334 28.2666 47.0667 30 49.0667 32.1333C49.1559 32.2225 49.2456 32.2955 49.3398 32.3549C53.875 37.1408 56.6667 43.5933 56.6667 50.6666C56.6669 65.3333 44.6669 77.3333 30.0002 77.3333Z"
                                        fill="#028851"
                                    />
                                    <path
                                        d="M11.467 53.2C11.467 52.4 10.8003 51.8667 10.0003 52C9.20026 52.1333 8.80026 52.8 8.93354 53.6C9.46683 57.8667 11.3335 62 14.4003 65.2C14.667 65.4667 14.9335 65.6 15.3335 65.6C15.6003 65.6 16.0003 65.4667 16.1335 65.2C16.8003 64.6667 16.8003 63.8667 16.2668 63.3333C13.6003 60.5333 12.0003 57.0667 11.467 53.2Z"
                                        fill="#028851"
                                    />
                                    <path
                                        d="M30.0002 69.2001C27.7335 69.2001 25.4669 68.8001 23.3335 68.0001C22.6668 67.7333 21.8668 68.1333 21.6002 68.8001C21.3337 69.4668 21.7335 70.2668 22.4002 70.5334C24.8002 71.4667 27.3335 72.0001 30.0002 72.0001C30.667 72.0001 31.3335 71.3334 31.3335 70.5334C31.3335 69.7334 30.8002 69.2001 30.0002 69.2001Z"
                                        fill="#028851"
                                    />
                                    <path
                                        d="M18.8003 66C18.0003 66 17.4671 66.5333 17.4671 67.3333C17.4671 68.1333 18.0003 68.6666 18.8003 68.6666C19.6003 68.6666 20.1336 67.9998 20.1336 67.3333C20.1336 66.5333 19.6003 66 18.8003 66Z"
                                        fill="#028851"
                                    />
                                </svg>

                                <h3>Pro</h3>
                            </div>

                            <div className="membership--perk">
                                <h3>
                                    <span>
                                        <sup>$</sup>28/<small>month</small>
                                    </span>
                                </h3>
                            </div>
                            <div className="membership--perk--desc">
                                <ul>
                                    <li>- Beginner Amenites Included</li>
                                    <li>- Unlimited Club Access</li>
                                    <li>- Unlimited Group Exercise</li>
                                    <li>- Unlimited Tanning</li>
                                    <li>- 20% off Supplements & Drinks</li>
                                </ul>
                            </div>
                            {/* <div className="button--su">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--meduim"
                type="submit"
              >
                Join Now
              </Button>
            </div> */}
                        </div>

                        <div className="membership--card">
                            <div className="membership--title">
                                <svg
                                    width="90"
                                    height="82"
                                    viewBox="0 0 90 82"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M84.5076 5.89023C77.1844 -1.43298 65.2686 -1.43298 57.9452 5.89023C54.3976 9.43786 52.444 14.1546 52.444 19.1715C52.444 24.1885 54.3976 28.9052 57.9452 32.4526C59.7661 34.2737 61.8955 35.6734 64.215 36.6057C63.3999 37.7404 62.5671 38.5666 61.9394 39.0293C59.23 41.0274 56.8293 43.3757 54.8124 45.9743C54.5779 44.5697 54.1817 43.1749 53.6193 41.8123C51.2552 36.0848 46.4499 31.974 40.4351 30.5341L38.2496 30.011C38.2073 29.8307 38.1651 29.6505 38.1228 29.4678C35.6806 18.8955 26.8094 10.9044 16.0477 9.58282C15.0192 9.45664 14.0813 10.1884 13.9551 11.2178C13.8287 12.247 14.5607 13.184 15.5901 13.3103C24.7908 14.4404 32.3756 21.2731 34.4638 30.3131C35.423 34.4652 36.3913 38.0245 37.342 40.8922C37.6034 41.6805 38.3369 42.1796 39.1242 42.1796C39.3201 42.1796 39.5193 42.1486 39.7153 42.0836C40.6996 41.7573 41.2331 40.6946 40.9068 39.7103C40.3663 38.0802 39.818 36.2078 39.2673 34.1161L39.5608 34.1864C44.39 35.3425 48.2489 38.6443 50.1479 43.2452C52.0052 47.745 51.6178 52.6799 49.0855 56.7835C49.0079 56.9092 48.9289 57.0337 48.8479 57.1572C48.2795 58.0247 48.5218 59.1886 49.3893 59.757C49.7066 59.965 50.0636 60.0643 50.4168 60.0643C51.0288 60.0643 51.6287 59.7656 51.989 59.2156C52.0884 59.0641 52.1854 58.9112 52.2812 58.7565C53.3115 57.087 54.0568 55.308 54.5165 53.4746C56.6945 49.0525 60.0303 45.1036 64.1683 42.0521C65.5173 41.0576 66.8965 39.4773 68.0077 37.6809C69.0606 37.8617 70.1363 37.9541 71.2263 37.9541C72.4942 37.9541 73.7427 37.8288 74.9582 37.5851C73.3946 43.2178 72.0837 48.1472 71.0545 52.2683C68.6512 61.8888 62.2937 74.2092 56.6599 77.2164C55.4886 77.8417 54.4697 77.9966 53.5479 77.6885C26.4325 65.2588 20.9715 52.3915 19.882 47.4329C19.6757 46.4937 18.7984 45.8736 17.864 45.967C13.3195 44.8195 9.39706 42.0111 6.79882 38.0376C4.1067 33.9207 3.15749 28.9859 4.1266 24.1427C4.32996 23.1257 3.67068 22.1365 2.6537 21.9329C1.63708 21.73 0.647324 22.3889 0.443964 23.4058C-0.7193 29.2207 0.421243 35.1468 3.65566 40.093C6.69423 44.7395 11.2474 48.0592 16.5351 49.5007C17.4317 52.6089 19.464 57.0138 24.0179 62.085C30.3095 69.0912 39.7458 75.5022 52.0649 81.1402C52.1126 81.1621 52.1612 81.1818 52.2106 81.1995C52.9576 81.4684 53.7224 81.6025 54.5022 81.6025C55.7759 81.6025 57.0894 81.2442 58.4284 80.5295C62.5735 78.317 66.105 73.0801 68.3376 69.0764C71.088 64.1445 73.4062 58.35 74.6981 53.1785C75.8646 48.5079 77.397 42.7853 79.2539 36.1631C81.1803 35.2514 82.9559 34.0046 84.5076 32.4528C91.8309 25.1294 91.8309 13.2136 84.5076 5.89023ZM71.2265 34.1984C67.2127 34.1984 63.4391 32.6353 60.6009 29.7971C57.7627 26.9589 56.1997 23.1854 56.1997 19.1715C56.1997 15.1577 57.7627 11.384 60.6009 8.54593C63.5304 5.61646 67.3785 4.15163 71.2265 4.15163C75.0746 4.15163 78.9227 5.61646 81.8521 8.54574C87.7111 14.4049 87.7113 23.9382 81.8521 29.7971C79.0139 32.6353 75.2402 34.1984 71.2265 34.1984Z"
                                        fill="#028851"
                                    />
                                    <path
                                        d="M67.7472 15.6922C65.8289 17.6106 65.8289 20.7321 67.7472 22.6508C68.7064 23.61 69.9664 24.0895 71.2263 24.0895C72.4863 24.0895 73.7463 23.61 74.7056 22.6508C76.6239 20.7323 76.6239 17.6107 74.7056 15.6924C72.7875 13.7739 69.6659 13.7739 67.7472 15.6922ZM72.0501 19.9951C71.5959 20.4491 70.857 20.4493 70.4029 19.9951C69.9487 19.5409 69.9487 18.802 70.4029 18.3478C70.63 18.1207 70.9283 18.0071 71.2267 18.0071C71.5249 18.0071 71.8233 18.1206 72.0503 18.3478C72.5041 18.802 72.5041 19.5409 72.0501 19.9951Z"
                                        fill="#028851"
                                    />
                                    <path
                                        d="M80.8257 9.57228C75.5327 4.27929 66.9204 4.27929 61.6274 9.57228C56.3344 14.8653 56.3344 23.4776 61.6274 28.7705C64.2739 31.417 67.7502 32.7403 71.2267 32.7403C74.7031 32.7403 78.1792 31.417 80.8259 28.7705C86.1187 23.4776 86.1187 14.8653 80.8257 9.57228ZM78.1702 26.115C74.3415 29.9439 68.1118 29.9439 64.2831 26.115C60.4544 22.2863 60.4544 16.0567 64.2831 12.228C66.1975 10.3136 68.712 9.35653 71.2267 9.35653C73.7413 9.35653 76.2558 10.3136 78.1702 12.228C81.9989 16.0565 81.9989 22.2863 78.1702 26.115Z"
                                        fill="#028851"
                                    />
                                </svg>

                                <h3>VIP</h3>
                            </div>

                            <div className="membership--perk">
                                <h3>
                                    <span>
                                        <sup>$</sup>48/<small>month</small>
                                    </span>
                                </h3>
                            </div>
                            <div className="membership--perk--desc">
                                <ul>
                                    <li>- All Pro Amenites Included</li>
                                    <li>- Unlimited Team Training</li>
                                    <li>- Monthly Progress Meating</li>
                                    <li>
                                        - Personalized Eating Plan from a Certified Nutritionist
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="button--su">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--meduim"
                type="submit"
              >
                Join Now
              </Button> 
            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="join-us">
                <div className="joinus--container">
                    <img
                        src="https://sm.askmen.com/t/askmen_in/photo/default/askmen-coolestgym-th_fmq6.h720.jpg"
                        alt="membership"
                        ref={(el) => {
                            cor = el;
                        }}
                    />
                    <div
                        className="joinus--headline"
                        ref={(el) => {
                            corri = el;
                        }}
                    >
                        <h3>How to Join?</h3>
                        <p>
                            Apply online or visit your nearest club and activate your Fitfinity
                            memberships in minutes to train for the future. Our memberships
                            are your shortcut to your fitness ambitions.
                        </p>
                        {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
                            Join Us{' '}
                        </Button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
