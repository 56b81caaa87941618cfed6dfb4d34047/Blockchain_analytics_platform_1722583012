/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722583015", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-500 to-purple-700 dark:from-pink-800 dark:to-purple-900 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12">
            <div id="cta-content" class="max-w-screen-md mx-auto text-center backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-2xl p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock the Power of Blockchain Data</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-light text-pink-100 md:text-xl">Gain real-time insights and analytics on emerging blockchain transactions and activities.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">Analyze Blockchain Now</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
