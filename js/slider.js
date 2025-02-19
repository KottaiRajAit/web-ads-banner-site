(function (d) {
    let slides = [{ "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/video/public-car-video-01-1723532903659.mp4", "cnName": "CDN Video 03", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "video", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T07:13:17.139Z" }, { "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/video/public-car-video-04-1723532873543.mp4", "cnName": "CDN video 02", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "video", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T07:13:17.139Z" }, { "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/video/public-Trees_And_Grass_In_The_Park_0922-1723532957275.mp4", "cnName": "CDN video 04", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "video", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T07:13:17.139Z" }, { "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/image/public--1723529146143.blob", "cnName": "Test CDN contents 01", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "image", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T06:10:43.979Z" }, { "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/image/public--1723529311243.blob", "cnName": "Test CDN content 03", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "image", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T06:10:43.979Z" }, { "src": "https://staging-cdn-web-ads.azureedge.net/ffr-web-ads/contents/image/public--1723529235825.blob", "cnName": "Test CDN content 02", "href": "http://www.google.com/?utm_source=localhost&utm_medium=website&utm_campaign=Test+CDN+web+ads+slider&utm_campaignId=vk1woyj1kc9&utm_content=website", "fileType": "image", "className": "ffrWebAdvertising1280x720webAdsSlider", "slideDuration": 4000, "slideDestinationURL": "", "sliderId": "66baf8e3b7c55be87e3e5271", "flowId": "66bafb60b7c55be87e3e5a7f", "contentTrackingUrl": "", "source": "webslider", "createdAt": "2024-08-13T06:10:43.979Z" }];
    let sliders = [{ "_id": "66baf8e3b7c55be87e3e5271", "sliderAutoPlay": true, "sliderLoop": true, "sliderDestinationURL": "", "sliderBannerRatio": { "bannerWidth": "1280", "bannerHeight": "720", "ratioWidth": "16", "ratioHeight": "9", "commonPresetResolutions": "" }, "startDate": "2024-08-12T22:00:00.000Z", "endDate": "2024-09-12T21:59:59.000Z", "flowId": "66bafb60b7c55be87e3e5a7f" }]
    let flows = [{ "flowId": "66bafb60b7c55be87e3e5a7f" }];
    let contentDuration = 0
    let sendingFlows = [];
    let sdkCookieEnabled = undefined;

    localStorage.setItem('sendingFlows', JSON.stringify(sendingFlows));
    let impressionCount = 0;
    let slidesCount = slides.length || 0
    let scheduleDuration = 0

    // Cache Storage
    var cacheName = 'slide-contents';

    // Local Storage
    function createLocalStorageItem(name, value) {
        localStorage.setItem(name, value);
    }

    function readLocalStorageItem(name) {
        return localStorage.getItem(name);
    }

    // Cookies
    function readCookie(name) {
        if (!sdkCookieEnabled) {
            return readLocalStorageItem(name);
        } else {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    }

    function createCookie(name, value, days) {
        if (!sdkCookieEnabled) {
            createLocalStorageItem(name, value);
        } else {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    }

    var uid = readCookie('ochnuid');
    var pid = readCookie('ochnpid');
    var url = window.location.href;

    var webChannelType = 'web_advertising_slider';

    async function loadScript() {
        let timeOutId = null;
        let sceduleSlideDisplay = false;
        const styles =
            '.slides, .scheduled-slides {' +
            'display: flex;' +
            '.slide, .scheduled-slide {' +
            'flex: 0 0 auto;' +
            'box-sizing: border-box;' +
            '}';

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        var defaultStyles = {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            display: 'block',
            cursor: 'pointer',
        };

        async function trackSlides(url) {
            if (!url || !cacheName) {
                console.log('Invalid URL or cache name');
            }
            url = url + '&uid=' + uid;
            return fetch(url)
                .then(async response => {
                    if (response.status === 200) {
                        console.log('Tracking URL:', url);
                    } else {
                        console.log('Server responded with a status:', response.status);
                        console.log('Failed response :', response);
                    }
                })
                .catch(error => {
                    console.log('Error caching image:', error);
                    return Promise.reject(error);
                });

        }

        async function initBanners() {
            let slidesGroups = slides.reduce((acc, slide) => {
                if (!acc[slide.className]) {
                    acc[slide.className] = [];
                }
                acc[slide.className].push(slide);
                return acc;
            }, {});

            for (let className in slidesGroups) {

                className = className.trim();

                let sliderContainer = document.querySelector('.' + CSS.escape(className));

                if (!sliderContainer) {
                    console.log('Slider container not found for class:', className);
                    continue;
                }

                sliderContainer.style.overflow = "hidden";

                let slideDiv = sliderContainer.querySelector('.slides');

                if (!slideDiv) {
                    slideDiv = document.createElement('div');
                    slideDiv.classList.add('slides');
                    slideDiv.style.display = 'flex';
                    slideDiv.style.width = '100%';
                    slideDiv.style.height = '100%';
                    sliderContainer.appendChild(slideDiv);
                }

                for (let slide of slidesGroups[className]) {
                    const createdSlide = await createSlide(slide);
                    slideDiv.appendChild(createdSlide);
                }

                const nextBtn = document.createElement('div');
                nextBtn.classList.add('next-btn', 'slider-btn');
                nextBtn.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-4 -4 54 54"><path fill="none" stroke="#cf000f" stroke-miterlimit="10" stroke-width="2" d="M16 40l16-16L16 8"></path></svg>';

                const prevBtn = document.createElement('div');
                prevBtn.classList.add('prev-btn', 'slider-btn');
                prevBtn.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-4 -4 58 58">' +
                    '<path fill="none" stroke="#cf000f" stroke-miterlimit="10" stroke-width="2" d="M32 8L16 24l16 16"></path>' +
                    '</svg>';

                const playBtn = document.createElement('div');
                playBtn.classList.add('play-btn', 'slider-btn');
                playBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" version="1.1" id="Capa_1" width="45px" height="45px" viewBox="0 0 390 390" xml:space="preserve">' +
                    '<g>' +
                    '<g>' +
                    '<path d="M195,0C87.303,0,0,87.303,0,195c0,107.697,87.303,195,195,195c107.697,0,195-87.303,195-195C390,87.303,302.697,0,195,0z     M253.871,211.921l-66.328,66.326c-4.578,4.577-10.702,7.011-16.927,7.011c-3.085,0-6.189-0.594-9.152-1.82    c-8.94-3.704-14.774-12.431-14.774-22.106V128.669c0-9.676,5.834-18.403,14.774-22.108c8.94-3.701,19.23-1.654,26.079,5.191    l66.328,66.328C263.215,187.424,263.215,202.576,253.871,211.921z" />' +
                    '</g>' +
                    '</g>' +
                    '</svg>';

                const pauseBtn = document.createElement("div");
                pauseBtn.classList.add('pause-btn', 'slider-btn');
                pauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="45px" width="45px" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">' +
                    '<style type="text/css">' +
                    '.st0 {' +
                    'fill: #ffffff;' +
                    '}' +
                    '</style>' +
                    '<g>' +
                    '<path class="st0" d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256s256-114.626,256-256   C512,114.625,397.375,0,256,0z M224,336h-64V176h64V336z M352,336h-64V176h64V336z" />' +
                    '</g>' +
                    '</svg>';

                sliderContainer.appendChild(nextBtn);
                sliderContainer.appendChild(prevBtn);
                sliderContainer.appendChild(playBtn);
                sliderContainer.appendChild(pauseBtn);

                let currentIndex = parseInt(readCookie(className + '_currentIndex')) || 0;
                let timeOutId = null;
                let paused = false;

                const buttonsStyles = {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '50%',
                    padding: '8px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                };

                function updateStyles(element, styles) {
                    element == playBtn || element == pauseBtn ? Object.assign(element.style, defaultStyles, styles, { display: 'none' }) : Object.assign(element.style, defaultStyles, styles);
                };

                updateStyles(prevBtn, { top: '52%', transform: 'translateY(-50%)', left: '-60px', ...buttonsStyles });
                updateStyles(nextBtn, { top: '52%', transform: 'translateY(-50%)', right: '-60px', ...buttonsStyles });
                updateStyles(playBtn, { top: '55%', left: '50%', transform: 'translateX(-50%)' });
                updateStyles(pauseBtn, { top: '55%', left: '50%', transform: 'translateX(-50%)' });

                function checkScheduledFlowSlide(flowId) {
                    let scheduledflow = flows.find(flow => flow.flowId === flowId && flow?.time?.check);
                    return scheduledflow ? true : false;
                };

                function getNextUnscheduledIndex(currentIndex, flowId) {
                    let nextIndex = (currentIndex + 1) % slidesGroups[className].length;
                    if (!sceduleSlideDisplay) {
                        while (checkScheduledFlowSlide(flowId)) {
                            nextIndex = (nextIndex + 1) % slidesGroups[className].length;
                            break;
                        }
                    }
                    return nextIndex;
                };

                function getPreviousUnscheduledIndex(currentIndex) {
                    let prevIndex = (currentIndex - 1 + slidesGroups[className].length) % slidesGroups[className].length;
                    if (!sceduleSlideDisplay) {
                        while (checkScheduledFlowSlide(slidesGroups[className][prevIndex]?.flowId)) {
                            prevIndex = (prevIndex - 1 + slidesGroups[className].length) % slidesGroups[className].length;
                            break;
                        }
                    }
                    return prevIndex;
                };

                nextBtn.addEventListener('click', () => {
                    currentIndex = getNextUnscheduledIndex(currentIndex);
                    updateSlide();
                });
                prevBtn.addEventListener('click', () => {
                    currentIndex = getPreviousUnscheduledIndex(currentIndex);
                    updateSlide();
                });
                nextBtn.addEventListener('mouseenter', () => {
                    paused = true;
                    clearTimeout(timeOutId);
                });
                prevBtn.addEventListener('mouseenter', () => {
                    paused = false;
                    clearTimeout(timeOutId);
                });
                nextBtn.addEventListener('mouseleave', () => {
                    paused = false;
                    loadContentsDelay();
                });
                prevBtn.addEventListener('mouseleave', () => {
                    paused = false;
                    loadContentsDelay();
                });

                function updateSlide() {
                    let slideDiv = document.querySelector('.' + className + ' .slides');
                    const checkLeft = slideDiv.children[currentIndex]?.offsetLeft;
                    slideDiv.style.transform = 'translateX(' + -checkLeft + 'px)';
                    createCookie(slidesGroups[className][currentIndex]?.className + '_currentIndex', currentIndex);
                }

                async function loadContentsDelay() {
                    clearTimeout(timeOutId);


                    let flowId = slidesGroups[className][currentIndex]?.flowId;
                    let sliderId = slidesGroups[className][currentIndex]?.sliderId;
                    let impressionFlow = flows.find(flow => flow.flowId === flowId && flow?.impressions?.check);
                    contentDuration = slidesGroups[className][currentIndex]?.slideDuration
                    if (impressionFlow) {
                        let checkImpression = checkMaxImpressions(flowId, sliderId);
                        if (!checkImpression) {
                            handleRemoveSlides(flowId);
                        }
                    };

                    if (slides && slides[currentIndex] && slides[currentIndex].contentTrackingUrl && slides[currentIndex].source == "campaign") {
                        await trackSlides(slides[currentIndex].contentTrackingUrl);
                    }
                    console.log("Slides group", slidesGroups[className])
                    if (!paused) {
                        if (slidesGroups[className].length > 0 && slidesGroups[className][currentIndex]?.fileType === "image") {
                            timeOutId = setTimeout(() => {
                                currentIndex = getNextUnscheduledIndex(currentIndex, slidesGroups[className][currentIndex]?.flowId);
                                updateSlide();
                                loadContentsDelay();
                                if (impressionFlow) {
                                    trackImpression(flowId, sliderId);
                                };
                                createCookie(slidesGroups[className][currentIndex]?.className + '_currentIndex', currentIndex);
                            }, contentDuration);
                        } else if (slidesGroups[className].length > 0 && slidesGroups[className][currentIndex]?.fileType === "video") {
                            let video = document.querySelector('.video-slide');
                            video.play().catch(error => {
                                console.log('Failed to play the video:', error);
                            });
                            video.addEventListener('ended', () => {
                                currentIndex = getNextUnscheduledIndex(currentIndex);
                                updateSlide();
                                loadContentsDelay();
                                if (impressionFlow) {
                                    trackImpression(flowId, sliderId);
                                };
                                createCookie(slidesGroups[className][currentIndex]?.className + '_currentIndex', currentIndex);
                            });
                        }
                    }
                }

                let translateValue = -currentIndex * 100 + '%';
                slideDiv.style.transform = 'translateX(' + translateValue + ')';

                // Check Initial Max Impressions
                let flowId = slidesGroups[className][currentIndex]?.flowId;
                let sliderId = slidesGroups[className][currentIndex]?.sliderId;
                let impressionFlow = flows.find(flow => flow.flowId === flowId && flow?.impressions?.check);

                if (impressionFlow) {
                    let checkImpression = checkMaxImpressions(flowId, sliderId);
                    if (!checkImpression) {
                        handleRemoveSlides(flowId)
                    }
                }

                document.addEventListener('slidesUpdated', loadContentsDelay);

                // Initialize autoplay
                if (slides.length > 0) {
                    loadContentsDelay();
                }
            }
        }

        async function createSlide(items) {
            let response = items.src;
            console.log("1) response", response)
            console.log("2) items.cnName", items.cnName)
            console.log("3) items.fileType", items.fileType)

            if (response) {
                const objectURL = response;

                if (items?.fileType === "image") {
                    const slide = document.createElement('div');
                    slide.classList.add('slide');
                    slide.style.width = '100%'
                    slide.style.height = '100%'
                    slide.setAttribute('name', items.flowId);
                    slide.setAttribute('id', "unscheduled");
                    slide.style.boxSizing = 'border-box'
                    slide.style.flex = '0 0 100%';
                    slide.innerHTML = '<a href="' + items.href + '?uid=' + uid + '&pid=' + pid + '&type=' + webChannelType + '&url=' + url + '" target="_blank">' + '<img src="' + objectURL + '" style="width:100%; height:100%; object-fit:cover;" />' + '</a>'

                    return slide;

                } else if (items?.fileType === "video") {
                    const slide = document.createElement('div');
                    slide.classList.add('slide');
                    slide.style.width = '100%'
                    slide.style.height = '100%'
                    slide.setAttribute('name', items.flowId);
                    slide.setAttribute('id', "unscheduled");
                    slide.style.boxSizing = 'border-box'
                    slide.style.flex = '0 0 100%';
                    slide.innerHTML = '<a href="' + items.href + '" target="_blank" class="adContainer"   >' +
                        '<video style = "width : 100% !important; height : 100%; object-fit: cover" muted class="video-slide"  preload="auto" allowfullscreen>' +
                        '<source src="' + objectURL + '" type="video/mp4">' +
                        '</video>' +
                        '</a>'

                    return slide;
                }
            }
        };

        function checkMaxImpressions(flowId, sliderId) {
            let flow = flows.find(flow => flow.flowId === flowId && flow?.impressions?.check);

            if (flow) {
                let getImpressions = JSON.parse(localStorage.getItem('maxImpressions')) || [];
                let impressionEntry = getImpressions.find(entry => entry.flowId === flowId && entry.sliderId === sliderId);
                if (impressionEntry) {
                    let impressionCount = impressionEntry.impressions;
                    let maxImpressions = parseInt(flow.impressions.websiteDisplaySliderBanner.impressions);
                    let repeats = flow.impressions.websiteDisplaySliderBanner.repeats;
                    if (repeats === 'total') {
                        return impressionCount <= maxImpressions;
                    } else {
                        return impressionCount < maxImpressions;
                    }
                } else {
                    return true;
                }
            }

            return true;
        }

        function handleRemoveSlides(flow) {
            let matchedSlides = [];
            let slides = Array.from(document.querySelectorAll('.slide'));

            slides.forEach(slide => {
                let slideName = slide.getAttribute('name');
                if (slideName === flow) {
                    matchedSlides.push(slide);
                }
            });

            matchedSlides.forEach(slide => {
                slide.remove();
            });
        }

        function trackImpression(flowId, sliderId) {
            let uid = readCookie('ochnuid');
            let pid = readCookie('ochnpid');
            let maxImpressions = JSON.parse(localStorage.getItem('maxImpressions')) || [];
            let impressionEntry = maxImpressions.find(entry => entry.flowId === flowId && entry.sliderId === sliderId);

            // Check before update the impression count
            let checkImpression = checkMaxImpressions(flowId, sliderId);
            if (!checkImpression) {
                return;
            };

            if (impressionEntry) {
                impressionEntry.impressions++;
            } else {
                impressionEntry = {
                    channel: 'website',
                    type: "websiteDisplaySliderBanner",
                    sliderId: sliderId,
                    flowId: flowId,
                    uid: uid,
                    pid: pid,
                    website: url,
                    impressions: 1
                };
                maxImpressions.push(impressionEntry);
            };
            localStorage.setItem('maxImpressions', JSON.stringify(maxImpressions));
        };

        let isScheduled = false;

        function handleSlidesToDisplay(flow) {
            setTimeout(() => {
                let scheduleSlider = document.getElementsByName(flow.flowId)
                Array.from(scheduleSlider).forEach(slide => {
                    slide.style.display = 'none';
                    slide.setAttribute('id', 'scheduled');
                });
                sceduleSlideDisplay = false;
                let schedule = document.querySelectorAll('#scheduled')
                slidesCount = slides.length - (schedule.length || 0)
                scheduleDuration = 0;
                let unscheduledSlides = document.querySelectorAll('#unscheduled')
                Array.from(unscheduledSlides).forEach(slide => {
                    slide.style.display = 'block';
                    slide.setAttribute('id', 'unscheduled');
                });
                isScheduled = false;
            }, scheduleDuration)
        }

        function handleScheduledFlows() {
            let flowType = 'scheduled';

            let scheduledFlows = flows.filter(flow => flow?.time?.check);
            if (scheduledFlows.length === 0) {
                return;
            };
            scheduledFlows.forEach(async (flow, index) => {
                let storedSendingFlows = JSON.parse(localStorage.getItem('sendingFlows')) || [];
                let latestSendingFlow = storedSendingFlows.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))[0];
                let slideList = sliders.filter(slider => slider.flowId === flow.flowId);

                if (!latestSendingFlow) {
                    latestSendingFlow = {
                        flowId: flow.flowId,
                        sentAt: new Date(),
                        count: 0
                    };
                    storedSendingFlows.push(latestSendingFlow);
                    localStorage.setItem('sendingFlows', JSON.stringify(storedSendingFlows));
                }

                let sendingFlowCount = 0;
                let conditionPassed = false;
                if (flow?.time?.check) {
                    let frequency = flow.time.frequency
                    let startDate = flow.time.startDate
                    let endDate = flow.time.endDate
                    let repeatFrequency = flow.time.repeatFrequency
                    const timeIntervals = await calculateFrequencyHours(frequency, startDate, endDate, repeatFrequency, flow.time.repeatInterval);
                    const currentTime = new Date();
                    const isCurrentTimeInIntervals = timeIntervals.some(interval => {
                        const intervalDate = new Date(interval);
                        const intervalPlus10Seconds = new Date(intervalDate.getTime() + 10000);
                        return currentTime >= intervalDate && currentTime <= intervalPlus10Seconds;
                    });

                    // Check max impressions
                    let checkImpression = checkMaxImpressions(flow.flowId, slideList[0]?.sliderId);
                    if (!checkImpression) {
                        handleRemoveSlides(flow.flowId);
                        return;
                    }

                    if (isCurrentTimeInIntervals && !isScheduled) {
                        sceduleSlideDisplay = true;
                        let unmatchedSlides = [];
                        let parentContainer = document.querySelector('.slides');
                        let matchedSlides = [];
                        let allSlider = document.querySelectorAll('.slide');
                        Array.from(allSlider).forEach(slide => {
                            let slideName = slide.getAttribute('name');
                            let slideId = slide.getAttribute('id');
                            if (slideName !== flow.flowId) {
                                if (slideId != "unscheduled") {
                                    slide.style.display = 'none';
                                    slide.setAttribute('id', 'unscheduled');
                                }
                                unmatchedSlides.push(slide);
                            } else {
                                slide.style.display = '';
                                slide.setAttribute('id', '');
                                matchedSlides.push(slide);
                                let filteredData = slides.filter(item => item.flowId === flow.flowId);
                                // Calculate total slide duration
                                let totalSlideDuration = filteredData.reduce((total, item) => total + item.slideDuration, 0);
                                scheduleDuration = totalSlideDuration
                            }
                        });

                        // Append matched slides first
                        matchedSlides.forEach(slide => {
                            slide.style.display = 'block';
                            slide.setAttribute('id', 'scheduled');
                        });

                        // Append unmatched slides after matched ones
                        unmatchedSlides.forEach(slide => {
                            slide.style.display = 'none';
                            slide.setAttribute('id', 'unscheduled');
                        });

                        // Track impression
                        let sliderId = slideList[0]?.sliderId;
                        trackImpression(flow.flowId, sliderId);
                        isScheduled = true;

                        if (isScheduled) {
                            handleSlidesToDisplay(flow);
                        };

                    } else {
                        isScheduled = false;
                        clearInterval(timeOutId);
                        document.dispatchEvent(new Event('slidesUpdated'));
                    }
                }

                if (conditionPassed) {
                    let storedSendingFlows = JSON.parse(localStorage.getItem('sendingFlows')) || [];
                    let latestSendingFlow = storedSendingFlows.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))[0];
                    latestSendingFlow.count += 1;
                    localStorage.setItem('sendingFlows', JSON.stringify(storedSendingFlows));
                }
            });
        }

        function calculateFrequencyHours(frequency, startDate, endDate, repeatInterval, repeatIntervalName) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            let minutesInHour = 60;
            let hoursInDays = 24
            let daysInWeek = 7;
            const frequencyTimes = [];
            let allFrequencyTimes = [];

            if (repeatIntervalName == 'hour') {
                let totalIntervals = Math.ceil(((end - start) / (1000 * 60 * 60) + 1) * frequency); // Total intervals in the date range
                let intervalInMinutes = (minutesInHour * repeatInterval) / frequency;
                // Calculate frequency intervals for the specified duration
                for (let i = 0; i < totalIntervals; i++) {
                    const totalMinutes = intervalInMinutes * i;
                    const hour = Math.floor(totalMinutes / minutesInHour);
                    const minute = Math.round(totalMinutes % minutesInHour);
                    if (hour < 24) {
                        const formattedTime = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':00'
                        frequencyTimes.push(formattedTime);
                    }
                }

                let current = new Date(start);
                let currentDate = new Date();
                // Iterate through the date range, distributing the frequency intervals across all hours
                if (currentDate >= start && currentDate <= end) {
                    while (current <= end) {
                        frequencyTimes.forEach(time => {
                            const formattedDateTime = current.toISOString().split('T')[0] + 'T' + time;
                            allFrequencyTimes.push(formattedDateTime);
                        });

                        // Move to the next repeat interval period
                        current.setDate(current.getDate() + 1)
                    }
                }
            } else if (repeatIntervalName == 'day') {
                let repeatIntervals = []
                const intervalInMinutes = (hoursInDays * minutesInHour * repeatInterval) / frequency;
                for (let day = 0; day < frequency; day++) {
                    const totalMinutes = intervalInMinutes * day;
                    const days = Math.floor(totalMinutes / (hoursInDays * minutesInHour));
                    const hours = Math.floor((totalMinutes % (hoursInDays * minutesInHour)) / minutesInHour);
                    const minutes = Math.round(totalMinutes % minutesInHour);
                    repeatIntervals.push({ days, hours, minutes });
                }

                let current = new Date(start);
                while (current <= end) {
                    repeatIntervals.forEach(({ days, hours, minutes }) => {
                        const date = new Date(current);
                        date.setDate(date.getDate() + days);
                        date.setHours(hours);
                        date.setMinutes(minutes);
                        date.setSeconds(0);
                        if (date > end) return;
                        let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
                        const formattedDateTime = current.toISOString().split('T')[0] + 'T' + time;
                        allFrequencyTimes.push(formattedDateTime);
                    });

                    // Move to the next repeat interval period
                    current.setDate(current.getDate() + repeatInterval);
                }

            } else {
                let intervalInMinutes = (daysInWeek * hoursInDays * minutesInHour * repeatInterval) / frequency;
                if (repeatIntervalName == 'month') {
                    const intervalInMinutes = (30 * hoursInDays * minutesInHour * repeatInterval) / frequency;
                }
                let repeatIntervals = []
                for (let week = 0; week < frequency; week++) {
                    const totalMinutes = intervalInMinutes * week;
                    const days = Math.floor(totalMinutes / (hoursInDays * minutesInHour));
                    const hours = Math.floor((totalMinutes % (hoursInDays * minutesInHour)) / minutesInHour);
                    const minutes = Math.round(totalMinutes % minutesInHour);
                    repeatIntervals.push({ days, hours, minutes });
                }
                let current = new Date(start);
                while (current <= end) {
                    repeatIntervals.forEach(({ days, hours, minutes }) => {
                        const date = new Date(current);
                        date.setDate(date.getDate() + days);
                        date.setHours(hours);
                        date.setMinutes(minutes);
                        date.setSeconds(0);
                        if (date > end) return;
                        let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
                        const formattedDateTime = current.toISOString().split('T')[0] + 'T' + time;
                        allFrequencyTimes.push(formattedDateTime);
                    });

                    // Move to the next repeat interval period (weeks)
                    if (repeatIntervalName == 'month') {
                        current.setMonth(current.getMonth() + repeatInterval);
                    } else {
                        current.setDate(current.getDate() + (repeatInterval * daysInWeek));
                    }
                }
            }
            allFrequencyTimes = Array.from(new Set(allFrequencyTimes));

            return allFrequencyTimes;
        };

        // INIT BANNERS
        initBanners();

        // INIT SCHEDULED BANNERS
        setInterval(() => {
            handleScheduledFlows();
        }, 5000);
    }
    console.log("loading DOMContentLoaded", document.readyState);
    if (document.readyState === 'loading') {
        console.log("Document is loading, attaching DOMContentLoaded event listener");
        document.addEventListener('DOMContentLoaded', loadScript);
    } else if (document.readyState === 'interactive' || document.readyState === 'complete') {
        console.log("Document is ready, executing loadScript immediately");
        loadScript();
    }
})(document)












{{!-- 

    {{!-- Tracking Imagen Impression --}}

    if (mediaType === "image") {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bannerId = entry.target.dataset.bannerId;
                    console.log(`Impression logged for Image Ad ID: ${bannerId}`);
                    fetch(apiUrl + '/impression', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            bannerId: bannerId,
                            timestamp: Date.now(),
                        }),
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: [0] });

        document.querySelectorAll('.ad-element').forEach((ad) => observer.observe(ad));
    }

    {{!-- Tracking video Impression --}}

    if (mediaType === 'video'){

    document.addEventListener('DOMContentLoaded', function () { 
        const trackImpression = (entry) => { 
            const target = entry.target; 
            const visiblePixels = entry.intersectionRect.width * entry.intersectionRect.height; 

            if (visiblePixels >= 1) { 
                const bannerId = target.dataset.bannerId; // Unique identifier for the ad 
                console.log(`Impression logged for Image Ad ID: ${bannerId}`); 

                fetch(apiUrl + '/impression', {
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    }, 
                    body: JSON.stringify({ 
                        bannerId: bannerId, 
                        timestamp: Date.now(), 
                    }), 
                }); 

                observer.unobserve(target);
            } 

        }; 

        // Initialize Intersection Observer 
        const observer = new IntersectionObserver((entries) => { 
            entries.forEach((entry) => trackImpression(entry)); 
        }, { threshold: 1 }); // Trigger when any part of the element is visible 

        document.querySelectorAll('.ad-element').forEach((ad) => observer.observe(ad)); 
    }); 
    }

    document.addEventListener('DOMContentLoaded', function () { 

    // Function to track impressions for both images and videos 
    const trackImpression = (entry, pixelThreshold) => { 
        const target = entry.target; 
        const visiblePixels = entry.intersectionRect.width * entry.intersectionRect.height; 

        if (visiblePixels >= pixelThreshold) { 
            const adId = target.dataset.adId; 
            console.log(`Impression logged for Ad ID: ${adId}`); 
            fetch('https://your-backend-domain.com/log-impression', { 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify({ 
                    adId: adId, 
                    type: target.dataset.adType || 'unknown', 
                    timestamp: Date.now(), 
                }), 
            });
            observer.unobserve(target); 
        } 
    }; 

    // Initialize Intersection Observer 
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => { 
            const adType = entry.target.dataset.adType; 
            if (adType === 'image') { 
                trackImpression(entry, 1); 
            } else if (adType === 'video') { 
                trackImpression(entry, 2); 
            } 
        }); 

    }, { threshold: [0] }); 

    document.querySelectorAll('.ad-element, .video-ad-element').forEach((ad) => observer.observe(ad)); 
}); 



