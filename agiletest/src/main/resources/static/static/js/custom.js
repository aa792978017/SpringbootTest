/* Global variables */
"use strict";
function fillerIn() {
	var username = localStorage.getItem("username");
    if ( username === null){
        window.location.href = 'login.html'
		console.log("xx")
    }else {

    }
}
var base_url = "http://localhost:8080";
var $document = $(document), $window = $(window), plugins = {
	mainSlider : $('#slider'),
	categoryCarousel : $('.category-carousel .container'),
	testimonialsCarousel : $('.testimonials-carousel'),
	brandsCarousel : $('.brands-carousel'),
	textIconCarousel : $('.text-icon-carousel'),
	bulbCarousel : $('.bulb-carousel'),
	gallery : $('#gallery'),
	backToTop : $('.back-to-top'),
	submenu : $('[data-submenu]'),
	isotopeGallery : $('.gallery-isotope'),
	postGallery : $('.blog-isotope'),
	postCarousel : $('.post-carousel'),
	contactForm : $('#contactform'),
	googleMapFooter : $('#footer-map'),
	googleMap : $('#map'),

	queryForm : $('#queryform'),
	perForm : $('#perform'),
	ticketForm : $('#ticketform'),
	pwdForm : $('#pedform')
}, shiftMenu = $('#slidemenu, #page-content, body, .navbar, .navbar-header'), $navbarToggle = $('.navbar-toggle'), $dropdown = $('.dropdown-submenu, .dropdown');

/* Initialize All Scripts */
$document
		.ready(function() {
			var windowWidth = window.innerWidth || $window.width();
			var windowH = $window.height();

			// skew block hover effect
			var $skewblock = $('.skew-wrapper'), $skew = $('.skew', $skewblock);

			if ($skewblock.length) {
				$skew.on('mouseenter', function() {
					$skew.not(this).addClass('min');
					$(this).addClass('active');
				}).on('mouseleave', function() {
					$skew.removeClass('min active');
				});
			}

			// menu hover effect
			var $electricBtn = $('.electric-btn');
			if ($electricBtn.length) {
				$electricBtn.each(function() {
					var $this = $(this), btntext = $('.text', $this).text();
					var mask = '<div class="mask"><span>' + btntext
							+ '</span></div>';
					for (var i = 0; i < 6; i++) {
						$this.append(mask);
					}
				})
			}

			// back to top
			var backPos;
			if (plugins.backToTop.length) {
				var backPos = plugins.backToTop.offset();
				if (backPos.top < windowH) {
					plugins.backToTop.hide();
				}
				plugins.backToTop.on('click', function() {
					$("html, body").animate({
						scrollTop : 0
					}, "slow");
					return false;
				});
			}

			// image popup
			if (plugins.gallery.length) {
				plugins.gallery.find('a.hover').magnificPopup({
					type : 'image',
					gallery : {
						enabled : true
					}
				});
			}

			// slider
			if (plugins.mainSlider.length) {
				plugins.mainSlider.nivoSlider({
					animSpeed : 500,
					pauseTime : 6000000,
					pauseOnHover : false,
					effect : 'sliceUpDown',
					prevText : '',
					nextText : '',
					controlNav : false
				});
			}

			// testimonials carousel
			if (plugins.testimonialsCarousel.length) {
				plugins.testimonialsCarousel.slick({
					mobileFirst : false,
					slidesToShow : 1,
					slidesToScroll : 1,
					infinite : true,
					autoplay : true,
					autoplaySpeed : 2000,
					arrows : false,
					dots : true
				});
			}

			// post carousel
			if (plugins.postCarousel.length) {
				plugins.postCarousel.slick({
					mobileFirst : false,
					slidesToShow : 1,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : true,
					dots : false
				});
			}

			// brands carousel
			if (plugins.brandsCarousel.length) {
				plugins.brandsCarousel.slick({
					mobileFirst : false,
					slidesToShow : 7,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : false,
					dots : false,
					variableWidth : true,
					responsive : [ {
						breakpoint : 991,
						settings : {
							slidesToShow : 5
						},
					}, {
						breakpoint : 767,
						settings : {
							slidesToShow : 3
						},
					}, {
						breakpoint : 480,
						settings : {
							slidesToShow : 1,
							arrows : true
						},
					} ]
				});
			}

			// mobile carousel
			function slickMobile(carousel) {
				carousel.slick({
					mobileFirst : true,
					slidesToShow : 1,
					slidesToScroll : 1,
					infinite : true,
					autoplay : false,
					autoplaySpeed : 2000,
					arrows : true,
					dots : true,
					slide : '.slide-item',
					responsive : [ {
						breakpoint : 767,
						settings : "unslick",
					} ]
				});
			}

			function startCarousel() {
				if (plugins.bulbCarousel.length) {
					slickMobile(plugins.bulbCarousel);
				}
				if (plugins.categoryCarousel.length) {
					slickMobile(plugins.categoryCarousel);
				}
				if (plugins.textIconCarousel.length) {
					slickMobile(plugins.textIconCarousel);
				}
			}
			if (windowWidth < 768) {
				startCarousel();
			}
			// END mobile carousel

			// submenu
			function toggleNavbarMethod(windowWidth) {
				var $dropdownLink = $(".dropdown > a, .dropdown-submenu > a");
				var $dropdown = $(".dropdown, .dropdown-submenu");
				var $dropdownCaret = $(".dropdown > a > .ecaret, .dropdown-submenu > a > .ecaret");
				$dropdownLink.on('click.toggleNavbarMethod', function(e) {
					e.preventDefault();
					e.stopPropagation();
					var url = $(this).attr('href');
					if (url)
						$(location).attr('href', url);
				});
				if (windowWidth > 767) {
					$dropdown.on(
							'mouseenter.toggleNavbarMethod',
							function() {
								var $this = $(this);
								$this.find('.dropdown-menu').first().stop(true,
										true).fadeIn("fast");
								$this.toggleClass('open');
							}).on(
							'mouseleave.toggleNavbarMethod',
							function() {
								var $this = $(this);
								$this.find('.dropdown-menu').first().stop(true,
										true).fadeOut("fast");
								$this.toggleClass('open');
							});
				} else {
					$dropdown.unbind('.toggleNavbarMethod');
					$dropdownCaret.unbind('.toggleNavbarMethod');
					$dropdownCaret.on('click.toggleNavbarMethod', function(e) {
						e.stopPropagation();
						e.preventDefault();
						var $li = $(this).parent().parent('li');
						if ($li.hasClass('opened')) {
							$li.find('.dropdown-menu').first().stop(true, true)
									.slideUp(0);
							$li.removeClass('opened');
						} else {
							$li.find('.dropdown-menu').first().stop(true, true)
									.slideDown(0);
							$li.addClass('opened');
						}
					})
				}
			}
			toggleNavbarMethod(windowWidth);

			// slide menu
			var $slideNav = $('#slide-nav'), toggler = '.navbar-toggle', $pagewrapper = $('#page-content'), $navigationwrapper = $('.navbar-header'), $slidemenu = $('#slidemenu'), menuwidth = '100%', slidewidth = '270px', menuneg = '-100%', slideneg = '-270px';

			$slideNav.after($('<div id="navbar-height-col"></div>'));
			$slideNav.on("click", toggler, function(e) {
				var $this = $(this);
				var $heightCol = $('#navbar-height-col');
				var selected = $this.hasClass('slide-active');
				$slidemenu.stop().animate({
					left : selected ? menuneg : '0px'
				});
				$heightCol.stop().animate({
					left : selected ? slideneg : '0px'
				});
				$pagewrapper.stop().animate({
					left : selected ? '0px' : slidewidth
				});
				$navigationwrapper.stop().animate({
					left : selected ? '0px' : slidewidth
				});
				$this.toggleClass('slide-active', !selected);
				$slidemenu.toggleClass('slide-active');
				$pagewrapper.toggleClass('slide-active');
				$navigationwrapper.toggleClass('slide-active');
				$('.navbar, body').toggleClass('slide-active');
			});
			// END slide menu

			// Isotope
			if (plugins.isotopeGallery.length) {
				var $gallery = plugins.isotopeGallery;
				$gallery.imagesLoaded(function() {
					setGallerySize();
				});
				$gallery.isotope({
					itemSelector : '.gallery__item',
					masonry : {
						columnWidth : '.gallery__item:not(.doubleW)'
					}
				});
				isotopeFilters($gallery);
			}

			// Isotope Filters (for gallery)
			function isotopeFilters(gallery) {
				var gallery = $(gallery);
				if (gallery.length) {
					var container = gallery;
					var optionSets = $(".filters-by-category .option-set"), optionLinks = optionSets
							.find("a");
					optionLinks.on('click', function(e) {
						var thisLink = $(this);
						if (thisLink.hasClass("selected"))
							return false;
						var optionSet = thisLink.parents(".option-set");
						optionSet.find(".selected").removeClass("selected");
						thisLink.addClass("selected");
						var options = {}, key = optionSet
								.attr("data-option-key"), value = thisLink
								.attr("data-option-value");
						value = value === "false" ? false : value;
						options[key] = value;
						if (key === "layoutMode"
								&& typeof changeLayoutMode === "function")
							changeLayoutMode($this, options);
						else {
							container.isotope(options);
							setGallerySize();
						}
						return false
					})
				}
			}

			function setGallerySize() {
				var windowW = window.innerWidth || $window.width(), itemsInRow = 2;
				if (windowW > 1199) {
					itemsInRow = 4;
				} else if (windowW > 767) {
					itemsInRow = 4;
				} else if (windowW > 480) {
					itemsInRow = 2;
				}
				var containerW = $('#page-content').width(), galleryW = containerW
						/ itemsInRow;
				$gallery.find('.gallery__item').each(function() {
					$(this).css({
						width : galleryW + 'px'
					});
				});
				$gallery.isotope('layout');
			}

			// Post Isotope
			if (plugins.postGallery.length) {
				var $postgallery = plugins.postGallery;
				$postgallery.imagesLoaded(function() {
					setPostSize();
				});
				$postgallery.isotope({
					itemSelector : '.blog-post',
					masonry : {
						gutter : 30,
						columnWidth : '.blog-post:not(.doubleW)'
					}
				});
			}

			// Post More
			var $postMoreLink = $('.view-more-post'), $postPreload = $('#postPreload');

			$postMoreLink.on('click', function() {
				var item;
				var target = $(this).attr('data-load');
				$(this).hide();
				$.ajax({
					url : target,
					success : function(data) {
						$postPreload.append(data);
						if (plugins.postGallery.length) {
							$(' > div', $postPreload).each(
									function() {
										item = $(this);
										$postgallery.append(item).isotope(
												'appended', item);
										setPostSize();
									});
						}
					}
				});
			})

			function setPostSize() {
				var windowW = window.innerWidth || $window.width(), itemsInRow = 1;
				if (windowW > 1199) {
					itemsInRow = 3;
				} else if (windowW > 767) {
					itemsInRow = 2;
				} else if (windowW > 480) {
					itemsInRow = 1;
				}
				var containerW = $('#pageContent .container').width() - 60, galleryW = containerW
						/ itemsInRow;
				$postgallery.find('.blog-post').each(function() {
					if (windowW > 767) {
						$(this).css({
							width : galleryW + 'px'
						});
					} else {
						$(this).css({
							width : galleryW + 60 + 'px'
						});
					}
				});
				setTimeout(function() {
					$('.slick-initialized').slick('setPosition');
					$postgallery.isotope('layout');
				}, 100);
			}

			// Contact page form
			if (plugins.contactForm.length) {
				var $contactform = plugins.contactForm;
				$contactform.validate({
					rules : {
						trueName : {
							required : true,
						},
						phone : {
							required : true,
							minlength : 11
						},
						identity : {
							required : true,
							minlength : 18
						},
						age : {
							required : true,
						}
					},
					messages : {
						trueName : {
							required : "请输入你的姓名",
						},
						phone : {
							required : "请输入你的电话号码",
							minlength : "你的电话号码应当为11位"
						},
						identity : {
							required : "请输入你的身份证号",
							minlength : "你的身份证号码应当为18位"
						},
						age : {
							required : "请输入你的年龄",
						}
					},
					submitHandler : function(form) {
						var trueName = $('#trueName').val();
						var idCardNum = $('#identity').val();
						var phoneNum = $('#phone').val();
						var age = $('#age').val();
						var storage = window.localStorage;
						var username = storage["username"];
						var json = {
							"username" : username,
							"trueName" : "1111",
							"idCardNum" : idCardNum,
							"phoneNum" : phoneNum,
							"age" : age
						}
						$(form).ajaxSubmit({
							type : "POST",
							url : base_url +'/updateUserInfo',
							data : JSON.stringify(json),
							contentType : 'application/json;charset=utf-8',
							dataType : 'json',
							success : function(data) {
								if (data.stateCode == "200") {
									// 修改成功
									$('#success').fadeIn();
									$('#contactform').each(function() {
										this.reset();
									});
								} else {
									// 注册失败,错误信息在data.msg里面
									alert("错误信息：" + data.msg);

								}
							},
							error : function() {
								$('#contactform').fadeTo("slow", 0, function() {
									$('#error').fadeIn();
								});
							}
						});
					}
				});
			}
			// ticketform
			if (plugins.ticketForm.length) {
				var $ticketform = plugins.ticketForm;
				$ticketform.validate({
					submitHandler : function(form) {
						var storage = window.localStorage;
						var username = storage["username"];
						var carNum = $('#carNum').val();
						var startTime  = $('#startTime').val()
						var json = {
							"username" : username,
							"carNum" :carNum ,
							"startTime": startTime
						}
                        $.ajax({
                            type:"post",
                            url:base_url + '/buyticket',
                            data:JSON.stringify(json),
                            contentType:'application/json;charset=utf-8',
                            dataType:'json',
                            success: function(data){
                                if (data.stateCode === 200){
                                    // 付款成功
                                    console.log("成功付款转向订单页面");
                                    window.location.href = 'orderForm.html';
                                }
                                else{
                                    // 付款失败,错误信息在data.msg里面
                                    alert("错误信息：" + data.msg);
                                }
                            }
                        })
						// $(form).ajaxSubmit({
						// 	type : 'POST',
						// 	url : 'http://localhost:8080/paymoney',
						// 	data : JSON.stringify(json),
						// 	contentType : 'application/json;charset=utf-8',
						// 	dataType : 'json',
						// 	success : function(data) {
						// 		if (data.stateCode == "200") {
						// 			// 付款成功
						// 			console.log("成功付款转向订单页面");
						// 			window.location.href = 'orderForm.html';
						// 		} else {
						// 			// 付款失败,错误信息在data.msg里面
						// 			alert("错误信息：" + data.msg);
                        //
						// 		}
						// 	},
						// 	error : function() {
                        //
						// 	}
						// });
					}
				});
			}
			// queryform
			if (plugins.queryForm.length) {
				var $queryform = plugins.queryForm;
				$queryform
						.validate({
							submitHandler : function(form) {
								var orginLocation = $("#source").val();
								var destinationLocation = $("#target").val();
								var startTime = $("#date").val();
								var json = {
									"orginLocation" : orginLocation,
									"destinationLocation" : destinationLocation,
									"startTime" : startTime
								}

                                $.ajax({
                                    type:"post",
                                    url:base_url +'/getalltrips',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success : function(data) {
                                        if (data.stateCode === 200) {
											window.localStorage.setItem("ticketItem", JSON.stringify(data.data))
                                            $("#ticketTable").siblings(
                                                'tr'
                                            ).remove()
                                            // $("#ticketTable").html("");
                                            // 修改成功
                                            console.log(data.data[0])
                                            // 在表格中呈现数据
                                            for (var i = 0;i<data.data.length; i++) {
                                                var tr;
                                                tr = '<td>'
                                                    + data.data[i].orginLocation
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].startTime
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].destinationLocation
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].reachTime
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].carNum
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].ticketPrice
                                                    + '</td>'
                                                    + '<td>'
                                                    + data.data[i].ticketNum
                                                    + '</td>'
                                                    + '<td>'
                                                    + '<button onclick="pay('+ i +')">购票</button>'
                                                    + '</td>';
                                                $("#ticketTable")
                                                    .append(
                                                        '<tr>'
                                                        + tr
                                                        + '</tr>');
                                            }

                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    },
                                })
								// $(form)
								// 		.ajaxSubmit(
								// 				{
								// 					type : 'POST',
								// 					url : 'http://localhost:8080/getalltrips',
								// 					data : JSON.stringify(json),
								// 					contentType : 'application/json;charset=utf-8',
								// 					dataType : 'json',
								// 					success : function(data) {
								// 						if (data.stateCode == "200") {
								// 							// 修改成功
                                //
								// 							// 在表格中呈现数据
								// 							for (var i in data.List) {
								// 								var tr;
								// 								tr = '<td>'
								// 										+ data.List[i].orginLocation
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].startTime
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].destinationLocation
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].reachTime
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].carNum
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].ticketPrice
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ data.List[i].ticketNum
								// 										+ '</td>'
								// 										+ '<td>'
								// 										+ '<button onclick="pay(data.List[i])"></button>'
								// 										+ '</td>';
								// 								$("ticketTable")
								// 										.append(
								// 												'<tr>'
								// 														+ tr
								// 														+ '</tr>');
								// 							}
                                //
								// 						} else {
								// 							// 注册失败,错误信息在data.msg里面
								// 							alert("错误信息："
								// 									+ data.msg);
                                //
								// 						}
								// 					},
								// 					error : function() {
								// 					}
								// 				});
							}
						});
			}

			// // pwdform
			// if (plugins.pwdForm.length) {
			// 	var $pwdform = plugins.pwdForm;
			// 	$pwdform.validate({
			// 		submitHandler : function(form) {
			// 			var username = $("#username").val();
			// 			var passwordOld = $("#passwordOld").val();
			// 			var passwordNew = $("#passwordNew").val();
			// 			var json = {
			// 				"username" : username,
			// 				"passwordOld" : passwordOld,
			// 				"passwordNew" : passwordNew
			// 			}
			// 			console.log(json)

                        //
                        // $.ajax({
                        //     type:"post",
                        //     url:'http://localhost:8080/updatePassword',
                        //     data:JSON.stringify(json),
                        //     contentType:'application/json;charset=utf-8',
                        //     dataType:'json',
                        //     success : function(data) {
                        //         if (data.stateCode === "200") {
                        //             // 密码修改成功
                        //             console.log("密码修改成功转向登陆页面");
                        //             window.localStorage.clear();
                        //             window.location.href = 'login.html';
                        //         } else {
                        //             // 付款失败,错误信息在data.msg里面
                        //             alert("错误信息：" + data.msg);
                        //
                        //         }
                        //     },
                            // error : function() {
                            //
                            // }
                        // })
						// $(form).ajaxSubmit({
						// 	type : 'POST',
						// 	url : 'http://localhost:8080/updatePassword',
						// 	data : JSON.stringify(json),
						// 	contentType : 'application/json;charset=utf-8',
						// 	dataType : 'json',
						// 	success : function(data) {
						// 		if (data.stateCode == "200") {
						// 			// 密码修改成功
						// 			console.log("密码修改成功转向登陆页面");
						// 			window.localStorage.clear();
						// 			window.location.href = 'login.html';
						// 		} else {
						// 			// 付款失败,错误信息在data.msg里面
						// 			alert("错误信息：" + data.msg);
                        //
						// 		}
						// 	},
						// 	error : function() {
                        //
						// 	}
						// });
			// 		}
			// 	});
			// }

			if (plugins.perForm.length) {
				var $perform = plugins.perForm;
				$perform
						.validate({
							rules : {
								trueName : {
									required : true,
								},
								phone : {
									required : true,
									minlength : 11
								},
								identity : {
									required : true,
									minlength : 18
								},
								age : {
									required : true,
								}
							},
							messages : {
								trueName : {
									required : "请输入你的姓名",
								},
								phone : {
									required : "请输入你的电话号码",
									minlength : "你的电话号码应当为11位"
								},
								identity : {
									required : "请输入你的身份证号",
									minlength : "你的身份证号码应当为18位"
								},
								age : {
									required : "请输入你的年龄",
								}
							},
							submitHandler : function(form) {
								var trueName = $('#trueName').val();
								var idCardNum = $('#identity').val();
								var phoneNum = $('#phone').val();
								var age = $('#age').val();
								var storage = window.localStorage;
								var username = storage["username"];
								var json = {
									"username" : username,
									"trueName" : trueName,
									"idCardNum" : idCardNum,
									"phoneNum" : phoneNum,
									"age" : age
								}
								console.log(json)
                                ///

                                $.ajax({
                                    type:"post",
                                    url:base_url +'/updateUserInfo',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success: function(data){
                                        console.log(data.stateCode)
                                        if (data.stateCode === 200) {

                                            // 修改成功
                                            alert("用户信息修改成功，跳转到首页")
                                            $('#success')
                                                .fadeIn();
                                            $('#perform')
                                                .each(
                                                    function() {
                                                        this
                                                            .reset();
                                                    });
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
                                            window.location.href = 'index.html';
                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    }
                                })
								// $(form)
								// 		.ajaxSubmit(
								// 				{
								// 					type : "POST",
								// 					url : 'http://localhost:8080/updateUserInfo', //登录后修改个人信息
								// 					data : json,
                                 //                    contentType:'application/json;charset=utf-8',
                                 //                    dataType:'json',
								// 					success : function(data) {
								// 						if (data.stateCode === "200") {
								// 							// 修改成功
								// 							$('#success')
								// 									.fadeIn();
								// 							$('#perform')
								// 									.each(
								// 											function() {
								// 												this
								// 														.reset();
								// 											});
								// 							console
								// 									.log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
								// 							window.location.href = 'index.html';
								// 						} else {
								// 							// 注册失败,错误信息在data.msg里面
								// 							console
								// 									.log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
								// 							alert("错误信息："
								// 									+ data.msg);
                                //
								// 						}
								// 					},
								// 					error : function() {
								// 						$('#perform')
								// 								.fadeTo(
								// 										"slow",
								// 										0,
								// 										function() {
								// 											$(
								// 													'#error')
								// 													.fadeIn();
								// 										});
								// 					}
								// 				});
							}
						});
			}
			if (plugins.perForm.length) {
				var $perform = plugins.perForm;
				$perform
						.validate({
							rules : {
								trueName : {
									required : true,
								},
								phone : {
									required : true,
									minlength : 11
								},
								identity : {
									required : true,
									minlength : 18
								},
								age : {
									required : true,
								}
							},
							messages : {
								trueName : {
									required : "请输入你的姓名",
								},
								phone : {
									required : "请输入你的电话号码",
									minlength : "你的电话号码应当为11位"
								},
								identity : {
									required : "请输入你的身份证号",
									minlength : "你的身份证号码应当为18位"
								},
								age : {
									required : "请输入你的年龄",
								}
							},
							submitHandler : function(form) {
								var trueName = $('#trueName').val();
								var idCardNum = $('#identity').val();
								var phoneNum = $('#phone').val();
								var age = $('#age').val();
								var storage = window.localStorage;
								var username = storage["username"];
								var json = {
									"username" : username,
									"trueName" : trueName,
									"idCardNum" : idCardNum,
									"phoneNum" : phoneNum,
									"age" : age
								}
                                $.ajax({
                                    type:"post",
                                    url:base_url +'/updateUserInfo',
                                    data:JSON.stringify(json),
                                    contentType:'application/json;charset=utf-8',
                                    dataType:'json',
                                    success: function(data){
                                        console.log(data.stateCode)
                                        if (data.stateCode === 200) {
                                            // 修改成功
                                            $('#success')
                                                .fadeIn();
                                            $('#perform')
                                                .each(
                                                    function() {
                                                        this
                                                            .reset();
                                                    });
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
                                            window.location.href = 'index.html';
                                        } else {
                                            // 注册失败,错误信息在data.msg里面
                                            console
                                                .log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
                                            alert("错误信息："
                                                + data.msg);

                                        }
                                    }
                                })
								// $(form)
								// 		.ajaxSubmit(
								// 				{
								// 					type : "POST",
								// 					url : 'http://localhost:8080/updateUserInfo',
								// 					data : JSON.stringify(json),
								// 					contentType : 'application/json;charset=utf-8',
								// 					dataType : 'json',
								// 					success : function(data) {
								// 						if (data.stateCode == "200") {
								// 							// 修改成功
								// 							$('#success')
								// 									.fadeIn();
								// 							$('#perform')
								// 									.each(
								// 											function() {
								// 												this
								// 														.reset();
								// 											});
								// 							console
								// 									.log("登陆成功后导向的完善个人信息的页面的json信息提交成功，准备转向系统首页");
								// 							window.location.href = 'index.html';
								// 						} else {
								// 							// 注册失败,错误信息在data.msg里面
								// 							console
								// 									.log("登陆成功后导向的完善个人信息的页面的json信息提交失败,alert输出data.msg");
								// 							alert("错误信息："
								// 									+ data.msg);
                                //
								// 						}
								// 					},
								// 					error : function() {
								// 						$('#perform')
								// 								.fadeTo(
								// 										"slow",
								// 										0,
								// 										function() {
								// 											$(
								// 													'#error')
								// 													.fadeIn();
								// 										});
								// 					}
								// 				});
							}
						});
			}

			// Resize window events
			$window.resize(function() {
				var windowWidth = window.innerWidth || $window.width();
				if (windowWidth < 768) {
					startCarousel();
				}
				if (windowWidth > 767 && $navbarToggle.is(':hidden')) {
					shiftMenu.removeClass('slide-active');
				}
				setTimeout(function() {
					if (plugins.isotopeGallery.length) {
						setGallerySize();
					}
					if (plugins.postGallery.length) {
						setPostSize();
					}
				}, 500);
				setTimeout(function() {
					$dropdown.removeClass('opened');
					toggleNavbarMethod(windowWidth);
				}, 1000);
			});
		})

$window.on('load', function() {
	setTimeout(function() {
		$('#loader-wrapper').fadeOut(500);
	}, 500);

	function createMap(id, mapZoom) {
		// Create google map
		// Basic options for a simple Google Map
		// For more options see:
		// https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom : mapZoom,
			scrollwheel : false, // The latitude and longitude to center the
			// map (always required)
			center : new google.maps.LatLng(55.8610112, -4.2547319), // Glasgow
			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles : [ {
				"featureType" : "water",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#e9e9e9"
				}, {
					"lightness" : 17
				} ]
			}, {
				"featureType" : "landscape",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f5f5f5"
				}, {
					"lightness" : 20
				} ]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.fill",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 17
				} ]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.stroke",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 29
				}, {
					"weight" : 0.2
				} ]
			}, {
				"featureType" : "road.arterial",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 18
				} ]
			}, {
				"featureType" : "road.local",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#ffffff"
				}, {
					"lightness" : 16
				} ]
			}, {
				"featureType" : "poi",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f5f5f5"
				}, {
					"lightness" : 21
				} ]
			}, {
				"featureType" : "poi.park",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#dedede"
				}, {
					"lightness" : 21
				} ]
			}, {
				"elementType" : "labels.text.stroke",
				"stylers" : [ {
					"visibility" : "on"
				}, {
					"color" : "#ffffff"
				}, {
					"lightness" : 16
				} ]
			}, {
				"elementType" : "labels.text.fill",
				"stylers" : [ {
					"saturation" : 36
				}, {
					"color" : "#333333"
				}, {
					"lightness" : 40
				} ]
			}, {
				"elementType" : "labels.icon",
				"stylers" : [ {
					"visibility" : "off"
				} ]
			}, {
				"featureType" : "transit",
				"elementType" : "geometry",
				"stylers" : [ {
					"color" : "#f2f2f2"
				}, {
					"lightness" : 19
				} ]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.fill",
				"stylers" : [ {
					"color" : "#fefefe"
				}, {
					"lightness" : 20
				} ]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.stroke",
				"stylers" : [ {
					"color" : "#fefefe"
				}, {
					"lightness" : 17
				}, {
					"weight" : 1.2
				} ]
			} ]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById(id);
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'images/map-marker.png';
		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position : new google.maps.LatLng(55.8610112, -4.2547319),
			map : map,
			icon : image
		});

	}

	if (plugins.googleMapFooter.length) {
		createMap('footer-map', 14)
	}
	if (plugins.googleMap.length) {
		createMap('map', 12)
	}

});
//
// function order() {
// 	var storage = window.localStorage;
// 	var username = storage["username"];
// 	// ajax传递数据
// 	var json = {
// 		"username" : username
// 	} // 这里的orderId是指订单id,tripsId是指新车票的id
// 	// ajax提交数据
// 	$.ajax({
// 		type : 'POST',
// 		url : 'http://localhost:8080/getorder',
// 		data : JSON.stringify(json),
// 		contentType : 'application/json;charset=utf-8',
// 		dataType : 'json',
// 		success : function(data) {
// 			if (data.stateCode == "200") {
// 				// 订单信息查询成功
// 				console.log("查询订单信息成功，呈现到订单信息的页面当中");
// 				for (var i in data.List) {
// 					var tr;
// 					tr = '<td>' + data.List[i].trueName + '</td>' + '<td>'
// 							+ data.List[i].orginLocation + '</td>' + '<td>'
// 							+ data.List[i].startTime + '</td>' + '<td>'
// 							+ data.List[i].destinationLocation + '</td>'
// 							+ '<td>' + data.List[i].reachTime + '</td>'
// 							+ '<td>' + data.List[i].carNum + '</td>' + '<td>'
// 							+ data.List[i].ticketPrice + '</td>' + '<td>'
// 							+ data.List[i].ticketNum + '</td>' + '<td>'
// 							+ '<button onlick="orderDetail(data.List[i])">查看</button>'
// 							+ '</td>';
// 					$("orderTable").append('<tr>' + tr + '</tr>');
// 				}
// 			} else
// 				// 查询失败,错误信息在data.msg里面（未填写个人信息，请完善个人信息）
// 				alert("错误信息：" + data.msg)
//
// 		}
// 	})
// 	window.location.href = 'orderForm.html';
// }

// function perInfo() {
// 	var storage = window.localStorage;
// 	var username = storage["username"];
// 	// ajax传递数据
// 	var json = {
// 		"username" : username
// 	} // 这里的orderId是指订单id,tripsId是指新车票的id
// 	// ajax提交数据
// 	$.ajax({
// 		type : 'POST',
// 		url : 'http://localhost:8080/getpersoninfo',
// 		data : JSON.stringify(json),
// 		contentType : 'application/json;charset=utf-8',
// 		dataType : 'json',
// 		success : function(data) {
// 			if (data.stateCode === "200") {
// 				// 个人信息查询成功
// 				console.log("查询个人信息成功，呈现到个人信息的页面当中");
// 				$("#trueName").val(data.trueName);
// 				$("#phone").val(data.phone);
// 				$("#identity").val(data.identity);
// 				$("#age").val(data.age);
// 			} else
// 				// 查询失败,错误信息在data.msg里面（未填写个人信息，请完善个人信息）
// 				alert("错误信息：" + data.msg)
// 		}
// 	})
// 	window.location.href = 'contact.html';
// }
// function orderDetail(i) {
//    // 在当前界面当中填充好详细信息然后再实现改签等的操作
//    //  $("#trueName").val('');
//    //  $("#phone").val('');
//    //  $("#identity").val('');
//    //  $("#carNum").val('');
//    //  $("#orginLocation").val('');
//    //  $("#destinationLocation").val('');
//    //  $("#startTime").val('');
//    //  $("#reachTime").val('');
//    //  $("#ticketPrice").val('');
//    //  var storage = window.localStorage;
//    //  var orderItem = storage.getItem("orderItem");
//    //  var data = JSON.parse(orderItem);
//    //  // console.log(data)
//    //  data = data[i];
//    //  console.log("用户点击某个订单呈现出详细信息");
//    //  $("#trueName").val(data.trueName);
//    //  $("#phone").val(data.phoneNum);
//    //  $("#identity").val(data.idCardNum);
//    //  $("#carNum").val(data.carNum);
//    //  $("#orginLocation").val(data.orginLocation);
//    //  $("#destinationLocation").val(data.destinationLocation);
//    //  $("#startTime").val(data.startTime);
//    //  $("#reachTime").val(data.reachTime);
//    //  $("#ticketPrice").val(data.ticketPrice);
//    //  storage.removeItem("orderItem");
// 	console.log("xx")
// }
// function refund() {
// 	console.log("实现用户退票的操作");
// 	//获取身份证号，车次号，出发时间，始发地
// 	var idCardNum = $("#identity").val();
// 	var carNum = $("#carNum").val();
// 	var startTime = $("#startTime").val();
// 	var reachTime = $("#reachTime").val();
// 	var json = {
// 		"idCardNum" : idCardNum,
// 		"carNum" : carNum,
// 		"startTime" : startTime,
// 		"reachTime" : reachTime
// 	}
// 	// ajax提交数据
// 	$.ajax({
// 		type:'POST',
// 	        url: 'http://localhost:8080/ticketrefund',
// 	        data:JSON.stringify(json),
// 	        contentType:'application/json;charset=utf-8',
// 	        dataType:'json',
// 		success : function(data) {
// 			if (data.stateCode == "200") {
// 				// 个人信息查询成功
// 				console.log("退票成功，呈现到个人信息的页面当中");
// 				window.location.href = 'orderForm.html';
// 			} else
// 				// 查询失败,错误信息在data.msg里面（未填写个人信息，请完善个人信息）
// 				alert("错误信息：" + data.msg)
// 		}
// 	})
// }
function change() {
	console.log("实现用户改签的操作");
	//需要添加数据项的是changeTable
	
}
function pay(i) {
	// 把信息呈现在页面下面的输入框当中
	// var ticket = JSON.stringify(json);
	// localStorage.setItem("ticket", ticket);// 此处存的为json String格式的ticket
	// 查询个人信息

	var storage = window.localStorage;
	var username = storage["username"];
	var ticketItem = storage.getItem("ticketItem");
	ticketItem = JSON.parse(ticketItem)
	// ajax
	var json = {
		"username" : username
	}
	// ajax提交数据
	$.ajax({
		type : 'POST',
		url : base_url +'/getpersoninfo',
		data : JSON.stringify(json),
		contentType : 'application/json;charset=utf-8',
		dataType : 'json',
		success : function(data) {
			if (data.stateCode == "200") {
				// 个人信息查询成功
				// var storage = window.localStorage;
				// var ticket = storage["ticket"];
				// ticket = JSON.parse(ticket);
				console.log("用户点击预定呈现出详细信息");
				$("#trueName").val(data.data.trueName);
				$("#phone").val(data.data.phoneNum);
				$("#identity").val(data.data.idCardNum);
				// console.log(ticketItem)
				$("#carNum").val(ticketItem[i].carNum);
				$("#orginLocation").val(ticketItem[i].orginLocation);
				$("#destinationLocation").val(ticketItem[i].destinationLocation);
				$("#startTime").val(ticketItem[i].startTime);
				$("#reachTime").val(ticketItem[i].reachTime);
				$("#ticketPrice").val(ticketItem[i].ticketPrice);
				storage.removeItem('ticketItem');// 清除留存的信息
				alert("请确认订单信息无误后再付款")
			} else
				// 查询失败,错误信息在data.msg里面（未填写个人信息，请完善个人信息）
				alert("错误信息：" + data.msg)

		}
	})
}