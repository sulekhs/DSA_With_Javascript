//Sliding Window

function slidingWindowMax(arr, k){
    let result = [];
    let dequeue = [];

    for (let i = 0; i < arr.length; i++) {
        if(dequeue.length > 0 && dequeue[0] <= i - k){
            dequeue.shift();
        };

        while(dequeue.length > 0 && arr[dequeue[dequeue.length - 1]] < arr[i]){
            dequeue.pop();
        };

        dequeue.push(i);

        if(i >= k - 1){
            result.push(arr[dequeue[0]]);
        };
    };

    return result;
};

const max = slidingWindowMax([1,3,-1,-3,5,3,6,7], 3);
console.log(max);


// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7PS9XTW"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->


// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-M7PS9XTW');</script>
// <!-- End Google Tag Manager -->

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-K61LHM68GP"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-K61LHM68GP');
// </script>