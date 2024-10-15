import React from 'react';

export default function FAQ() {
    const toggleAccordion = (index) => {
        const content = document.getElementById(`content-${index}`);
        const icon = document.getElementById(`icon-${index}`);

        // SVG for Down icon
        const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

        const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0';
            icon.innerHTML = upSVG;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.innerHTML = downSVG;
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-5xl'>Frequently Asked Questions</h1>
                <p className='mt-4 font-medium text-xl text-center'>Got questions? We Got Answers</p>

                <div className="accordion mt-4 flex flex-col justify-end w-full max-w-md">
                    {/* Accordion Item 1 */}
                    <div className="border-b border-slate-200">
                        <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center py-5 text-slate-800">
                            <span>What are streams?</span>
                            <span id="icon-1" className="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-slate-500">
                                Streams represent communities. Each campaign belongs to a stream. The community in that stream backs and promotes the campaigns within it. For example, in the Steady stream, each campaign is worth $10, the community members back and promote the campaigns that live in this stream.
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="border-b border-slate-200">
                        <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center py-5 text-slate-800">
                            <span>Can I back my own campaign?</span>
                            <span id="icon-2" className="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-2" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-slate-500">
                                Yes. You can back or join your own campaign as many times as you'd like. Search your campaign from the homepage and then join it.
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="border-b border-slate-200">
                        <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center py-5 text-slate-800">
                            <span>Can I start or join multiple Campaign? </span>
                            <span id="icon-3" className="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-3" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-slate-500">
                                Each campaign stream has a fixed contribution amount (same as the hosting fee), so you can only join or start a campaign at that set value. If you'd like to contribute more, you can back the campaign multiple times. If you're launching a new campaign, consider choosing a higher-value stream instead. Better yet, run multiple campaigns with varying value simultaneously and invite backers to the appropriate campaign!
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="border-b border-slate-200">
                        <button onClick={() => toggleAccordion(4)} className="w-full flex justify-between items-center py-5 text-slate-800">
                            <span>What is your refund policy?</span>
                            <span id="icon-4" className="text-slate-800 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-4" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-slate-500">
                                Once you have started a campaign or backed one, refunds cannot be issued.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
