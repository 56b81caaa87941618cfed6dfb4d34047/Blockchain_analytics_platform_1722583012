/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722583015", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-500 to-purple-700 dark:from-pink-700 dark:to-purple-900">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 backdrop-blur-md bg-white bg-opacity-20 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto dark:border-purple-600 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            Blockchain Analytics Suite
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white font-medium">
                        Stay ahead of the curve with our cutting-edge blockchain data analysis tools. Gain real-time insights into the latest blockchain activity and transactions.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
