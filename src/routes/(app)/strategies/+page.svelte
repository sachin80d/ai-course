<script>
	import { seo } from '$lib';
	// import ActionsSection from '$lib/components/landing/ActionsSection.svelte';
	// import ClientSection from '$lib/components/landing/ClientSection.svelte';
	// import CtaSection from '$lib/components/landing/CtaSection.svelte';
	import StrategiesGrid from '$lib/components/strategies/StrategiesGrid.svelte';
	// import PricingSection from '$lib/components/landing/PricingSection.svelte';
	// import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
    import Sparkles from "$lib/components/magic/Sparkle/Sparkle.svelte";
    import Particles from "$lib/components/magic/Particles/Particles.svelte";
    import BackgroundGradient from '$lib/components/magic/BackgroundGradient/BackgroundGradient.svelte';

    import RainbowButton from '$lib/components/magic/RainbowButton/RainbowButton.svelte';
    function triggerButtonClick() {
		const targetButton = document.getElementById("target-button");
		if (targetButton) {
			console.log("Button clicked");
		targetButton.click();
		} else {
		console.warn("Button with ID 'target-button' not found!");
		}
	}
 
    let strategies = [
        {
            "_id": "671db63f61d1012106bed4ea",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 350000.0,
            "name": "Mr. Option Nifty 925",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 826.82,
                "Expectancy": 0.32,
                "MaximumDrawdown": -23790.0,
                "OverallProfit": 202571.25,
                "WinningRatio": 65.31
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.411",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 1030,
            "underlying": "NIFTY"
        },
        {
            "_id": "671db4981da0e8881c9c5604",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 50000.0,
            "name": "Mr. Option Momentum Buying",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 438.44,
                "Expectancy": 0.15,
                "MaximumDrawdown": -65962.5,
                "OverallProfit": 100402.5,
                "WinningRatio": 38.86
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:04.398",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 883,
            "underlying": "NIFTY"
        },
        {
            "_id": "67693fb7ecab28bef6253b4e",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 50000.0,
            "name": "SENSEX RBO",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 366.43,
                "Expectancy": 0.16,
                "MaximumDrawdown": -47680.0,
                "OverallProfit": 68156.0,
                "WinningRatio": 42.47
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:07.095",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 702,
            "underlying": "SENSEX"
        },
        {
            "_id": "676a617de25ce815c3e4db86",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 300000.0,
            "name": "AASHISH  SENSEX TB SHORT",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 980.87,
                "Expectancy": 0.38,
                "MaximumDrawdown": -19139.0,
                "OverallProfit": 240314.0,
                "WinningRatio": 66.53
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.434",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 589,
            "underlying": "SENSEX"
        },
        {
            "_id": "671b3724fb9e5ac14d6b8ef1",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 350000.0,
            "name": "Mr.Option Nifty Strangle",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 436.67,
                "Expectancy": 0.27,
                "MaximumDrawdown": -10301.25,
                "OverallProfit": 106983.75,
                "WinningRatio": 68.57
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:05.260",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 483,
            "underlying": "NIFTY"
        },
        {
            "_id": "67a43bea11103a8d6109caa1",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 185000.0,
            "name": "TradeMilaan Nifty Selling [DTE 1,3]",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 750.64,
                "Expectancy": 0.34,
                "MaximumDrawdown": -25023.75,
                "OverallProfit": 183907.5,
                "WinningRatio": 60.82
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:09.286",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 402,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b0a9128084ae2d3b0836fc",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 50000.0,
            "name": "TradeMilaan Sensex  Buying 2 [DTE 0,1,3]",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 1128.31,
                "Expectancy": 1.73,
                "MaximumDrawdown": -6511.0,
                "OverallProfit": 265152.0,
                "WinningRatio": 62.55
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.451",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 386,
            "underlying": "SENSEX"
        },
        {
            "_id": "6746fd04b691ea2df6273b38",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 50000.0,
            "name": "Mr. Option Buyer Monday & Friday",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 648.7,
                "Expectancy": 0.25,
                "MaximumDrawdown": -45352.5,
                "OverallProfit": 152445.0,
                "WinningRatio": 35.32
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.455",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 376,
            "underlying": "NIFTY"
        },
        {
            "_id": "671db423cdd186af52ce4b72",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 350000.0,
            "name": "Mr. Option Strangle",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 303.9,
                "Expectancy": 0.25,
                "MaximumDrawdown": -8865.0,
                "OverallProfit": 74456.25,
                "WinningRatio": 65.31
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:08.767",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 369,
            "underlying": "NIFTY"
        },
        {
            "_id": "67aaebfc9d70d8a1b90d1e57",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 150000.0,
            "name": "TradeMilaan Sensex OTM Selling [DTE 0,3]",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 1074.61,
                "Expectancy": 0.93,
                "MaximumDrawdown": -6209.0,
                "OverallProfit": 263280.0,
                "WinningRatio": 66.94
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.469",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 342,
            "underlying": "SENSEX"
        },
        {
            "_id": "674702211baa224e261f5d1e",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 300000.0,
            "name": "Mr.Option Sensex Sell & Buy Th & Fri",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 380.46,
                "Expectancy": 0.35,
                "MaximumDrawdown": -13269.0,
                "OverallProfit": 93212.0,
                "WinningRatio": 55.92
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:08.045",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 295,
            "underlying": "SENSEX"
        },
        {
            "_id": "677908472711b97f90314045",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 300000.0,
            "name": "NIFTY S S 003",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 635.79,
                "Expectancy": 0.22,
                "MaximumDrawdown": -16773.75,
                "OverallProfit": 155767.5,
                "WinningRatio": 60.41
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:11.996",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 261,
            "underlying": "NIFTY"
        },
        {
            "_id": "6788ba96f4fd6c836cb1f5f2",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 45000.0,
            "name": "nifty buy above box 11 am",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 397.91,
                "Expectancy": 0.13,
                "MaximumDrawdown": -59602.5,
                "OverallProfit": 87540.0,
                "WinningRatio": 40.45
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.492",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 224,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b833f3621497bfa8b355fe",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 50000.0,
            "name": "TradeMilaan Sensex Buying  [DTE 0,1]",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 1165.27,
                "Expectancy": 1.82,
                "MaximumDrawdown": -7551.0,
                "OverallProfit": 277335.0,
                "WinningRatio": 64.71
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:08.140",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 199,
            "underlying": "SENSEX"
        },
        {
            "_id": "67a43bfeabe2a615cdc7a5c0",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 150000.0,
            "name": "TradeMilaan Sensex  Selling [DTE 0,1,2,3]",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 1101.4,
                "Expectancy": 0.59,
                "MaximumDrawdown": -23426.0,
                "OverallProfit": 269843.0,
                "WinningRatio": 62.86
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.557",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 189,
            "underlying": "SENSEX"
        },
        {
            "_id": "67470141bbd7c06aede96c2d",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 260000.0,
            "name": "Mr. Option Nifty delta netural M T TH",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 426.06,
                "Expectancy": 0.3,
                "MaximumDrawdown": -17621.25,
                "OverallProfit": 156363.75,
                "WinningRatio": 45.5
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.552",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 186,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b830df56ecdc8c2182e4cf",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 50000.0,
            "name": "TradeMilaan Sensex Buying [DTE 0,1,3]",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 1061.5,
                "Expectancy": 1.67,
                "MaximumDrawdown": -5498.0,
                "OverallProfit": 244146.0,
                "WinningRatio": 66.09
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:10.756",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 177,
            "underlying": "SENSEX"
        },
        {
            "_id": "6788b9ac71aebbc07eb7f8b8",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 45000.0,
            "name": "sensex buy above box 11 am",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 445.82,
                "Expectancy": 0.19,
                "MaximumDrawdown": -43710.0,
                "OverallProfit": 96297.0,
                "WinningRatio": 39.35
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:07.599",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 171,
            "underlying": "SENSEX"
        },
        {
            "_id": "6782a12c00608ca9cef51505",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 50000.0,
            "name": "TradeMilaan Sensex Buying [DTE 0]",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 447.03,
                "Expectancy": 1.1,
                "MaximumDrawdown": -3191.0,
                "OverallProfit": 88959.0,
                "WinningRatio": 52.26
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.625",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 164,
            "underlying": "SENSEX"
        },
        {
            "_id": "671db3a0273e365055e9cd09",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 200000.0,
            "name": "Mr. Option Straddle 2.0",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 243.64,
                "Expectancy": 0.06,
                "MaximumDrawdown": -87930.0,
                "OverallProfit": 59692.5,
                "WinningRatio": 38.37
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.152",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 153,
            "underlying": "NIFTY"
        },
        {
            "_id": "6746fec3a37e310a7d963f5a",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 350000.0,
            "name": "Mr.Option Sensex Sell & Buy",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 442.55,
                "Expectancy": 0.36,
                "MaximumDrawdown": -15940.0,
                "OverallProfit": 108424.0,
                "WinningRatio": 58.37
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:07.700",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 150,
            "underlying": "SENSEX"
        },
        {
            "_id": "6746ffe0f81879aebe2da720",
            "analyst_id": "6454e43099bad1a3e19f6bed",
            "analyst_name": "Jainam Broking Ltd.",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6454e43099bad1a3e19f6bed.jpg",
            "analyst_registration": "INH000006448",
            "margin": 350000.0,
            "name": "Mr. Option Non directional With Hedges",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 366.09,
                "Expectancy": 0.24,
                "MaximumDrawdown": -14947.5,
                "OverallProfit": 89692.5,
                "WinningRatio": 63.27
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.639",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 150,
            "underlying": "NIFTY"
        },
        {
            "_id": "67aae9329b3a6efc1e09db52",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 185000.0,
            "name": "TradeMilaan Sensex ATM Selling [DTE 0,1,3]",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 1172.47,
                "Expectancy": 0.58,
                "MaximumDrawdown": -21756.0,
                "OverallProfit": 287255.0,
                "WinningRatio": 66.53
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:05.209",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 133,
            "underlying": "SENSEX"
        },
        {
            "_id": "677cf7acce1eabb3143c84f3",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 300000.0,
            "name": "SENSEX S S 0.001",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 826.69,
                "Expectancy": 0.28,
                "MaximumDrawdown": -45654.0,
                "OverallProfit": 202539.0,
                "WinningRatio": 55.92
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:12.429",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 108,
            "underlying": "SENSEX"
        },
        {
            "_id": "6788b910e119a0281f950f5f",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 45000.0,
            "name": "sensex buy above box",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 467.28,
                "Expectancy": 0.18,
                "MaximumDrawdown": -57438.0,
                "OverallProfit": 105605.0,
                "WinningRatio": 37.61
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.658",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 88,
            "underlying": "SENSEX"
        },
        {
            "_id": "6769465597172f378991f53d",
            "analyst_id": "647f1c18c94664e52688f9c6",
            "analyst_name": "Ashish Rajput",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/647f1c18c94664e52688f9c6/09caa79d5a034d32bdce96777fb3834d.jpeg",
            "analyst_registration": "INH000013174",
            "margin": 300000.0,
            "name": "NIFTY DIRECTIONAL SELLING",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 268.41,
                "Expectancy": 0.09,
                "MaximumDrawdown": -47745.0,
                "OverallProfit": 65760.0,
                "WinningRatio": 57.14
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.962",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 77,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b0aaf1aadac9c339c227ca",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 50000.0,
            "name": "TradeMilaan Nifty Buying [DTE 1,4]",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 311.62,
                "Expectancy": 0.23,
                "MaximumDrawdown": -19143.75,
                "OverallProfit": 75723.75,
                "WinningRatio": 50.21
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:07.671",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 71,
            "underlying": "NIFTY"
        },
        {
            "_id": "67a8844784bc6bb1790a8476",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 300000.0,
            "name": "Nifty - Decay Edge 1",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 541.47,
                "Expectancy": 0.2,
                "MaximumDrawdown": -32523.75,
                "OverallProfit": 132660.0,
                "WinningRatio": 51.84
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.729",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 70,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b31fd698f3347ff897c591",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 45000.0,
            "name": "Nifty - Breakout Edge 2",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 748.62,
                "Expectancy": 0.4,
                "MaximumDrawdown": -22792.5,
                "OverallProfit": 77107.5,
                "WinningRatio": 44.66
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.936",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 61,
            "underlying": "NIFTY"
        },
        {
            "_id": "67bf2d3874689e75b345d09f",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 215000.0,
            "name": "AlphaQuant - 920 Straddle",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 480.94,
                "Expectancy": 0.29,
                "MaximumDrawdown": -13537.0,
                "OverallProfit": 117831.0,
                "WinningRatio": 48.16
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:06.320",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 34,
            "underlying": "SENSEX"
        },
        {
            "_id": "67a884f9f3e0248de091aee3",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 50000.0,
            "name": "Nifty - Breakout Edge 1",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 333.69,
                "Expectancy": 0.16,
                "MaximumDrawdown": -23190.0,
                "OverallProfit": 42712.5,
                "WinningRatio": 44.53
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.744",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 29,
            "underlying": "NIFTY"
        },
        {
            "_id": "67c20e770a6220ec5ed6abcc",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 215000.0,
            "name": "AlphaQuant - Sensex Undertaker",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 711.72,
                "Expectancy": 0.39,
                "MaximumDrawdown": -15204.0,
                "OverallProfit": 174371.0,
                "WinningRatio": 64.49
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:11.576",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 27,
            "underlying": "SENSEX"
        },
        {
            "_id": "67b31ff8b6fe86e4ed56a9fd",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 45000.0,
            "name": "Nifty - Breakout Edge 3",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 612.28,
                "Expectancy": 0.29,
                "MaximumDrawdown": -19458.75,
                "OverallProfit": 60003.75,
                "WinningRatio": 41.84
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:02.862",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 25,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b81c28c460d48a1b1c2654",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 275000.0,
            "name": "Sensex - Decay Edge 1",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 686.93,
                "Expectancy": 0.33,
                "MaximumDrawdown": -32030.0,
                "OverallProfit": 168299.0,
                "WinningRatio": 59.18
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:05.312",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 24,
            "underlying": "SENSEX"
        },
        {
            "_id": "67c1b59adbf5213e2ecf56a4",
            "analyst_id": "6762b6c09504c5c16fdfd688",
            "analyst_name": "Sasikumar Peyyala ",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/6762b6c09504c5c16fdfd688/ee8bedc506d54ae4b27c5f724b1480ee.jpeg",
            "analyst_registration": "INH000019327",
            "margin": 185000.0,
            "name": "TradeMilaan Nifty Selling [DTE 0,2,4]",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 740.95,
                "Expectancy": 0.27,
                "MaximumDrawdown": -19162.5,
                "OverallProfit": 181533.75,
                "WinningRatio": 61.22
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.761",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 24,
            "underlying": "NIFTY"
        },
        {
            "_id": "67c20d2d9950036a3876fb8c",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 230000.0,
            "name": "AlphaQuant - Nifty Undertaker",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 552.51,
                "Expectancy": 0.35,
                "MaximumDrawdown": -12723.75,
                "OverallProfit": 135363.75,
                "WinningRatio": 61.63
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:03.422",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 22,
            "underlying": "NIFTY"
        },
        {
            "_id": "67c2a7c810bb4107ed1122d5",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 60000.0,
            "name": "AlphaQuant - Sensex Buying",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 896.09,
                "Expectancy": 0.26,
                "MaximumDrawdown": -51212.0,
                "OverallProfit": 210580.0,
                "WinningRatio": 45.11
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.818",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 21,
            "underlying": "SENSEX"
        },
        {
            "_id": "67b3235856b42fe18cf2daff",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 300000.0,
            "name": "Nifty - Decay Edge 3",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 494.66,
                "Expectancy": 0.2,
                "MaximumDrawdown": -24667.5,
                "OverallProfit": 121192.5,
                "WinningRatio": 45.71
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:08.926",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 20,
            "underlying": "NIFTY"
        },
        {
            "_id": "67b32149b6fe86e4ed56aa07",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 300000.0,
            "name": "Nifty - Decay Edge 2",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 476.11,
                "Expectancy": 0.29,
                "MaximumDrawdown": -29066.25,
                "OverallProfit": 116647.5,
                "WinningRatio": 42.04
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:00.782",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 13,
            "underlying": "NIFTY"
        },
        {
            "_id": "67c17591dbf5213e2ecf5592",
            "analyst_id": "652e6bc41951b14c6f88d247",
            "analyst_name": "Sparsh Jindal",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/652e6bc41951b14c6f88d247/d7b7482afc9b44c99e0c02d305f1ab83.jpeg",
            "analyst_registration": "INH000015367",
            "margin": 25000.0,
            "name": "Sensex - Breakout Edge 1",
            "positional": "intraday",
            "side": "buy",
            "statistics": {
                "AverageProfitPerTrade": 536.2,
                "Expectancy": 0.29,
                "MaximumDrawdown": -19171.0,
                "OverallProfit": 56301.0,
                "WinningRatio": 40.95
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:09.034",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 13,
            "underlying": "SENSEX"
        },
        {
            "_id": "67c4953d37a975cb7436bc13",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 300000.0,
            "name": "AlphaQuant - Nifty - HHH",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 2053.87,
                "Expectancy": 0.27,
                "MaximumDrawdown": -70867.5,
                "OverallProfit": 503197.5,
                "WinningRatio": 51.02
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:04.756",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 9,
            "underlying": "NIFTY"
        },
        {
            "_id": "67c48d84bbfab726011dcf92",
            "analyst_id": "67bede407def28029e7ea95b",
            "analyst_name": "Prakash Chand Chotia",
            "analyst_profile_picture": "https://media.algotest.in/profile-pic/67bede407def28029e7ea95b/00b49ea2ea3d460ab8666f3aa3a16722.jpeg",
            "analyst_registration": "INH000018498",
            "margin": 250000.0,
            "name": "AlphaQuant - Sensex - HHH",
            "positional": "intraday",
            "side": "sell",
            "statistics": {
                "AverageProfitPerTrade": 1436.9,
                "Expectancy": 0.23,
                "MaximumDrawdown": -49820.0,
                "OverallProfit": 352041.0,
                "WinningRatio": 57.14
            },
            "statistics_meta": {
                "compute_ts": "2025-03-02T20:30:09.551",
                "end_date": "2025-03-02",
                "start_date": "2024-03-02"
            },
            "subscriptions_count": 6,
            "underlying": "SENSEX"
        }
    ];

</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content="@Sachin_Dalal" />


</svelte:head>

<div
	class="flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black"
>
<Particles className="absolute inset-0" refresh={true} />

<span
class="pb-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
>
Strategies
</span>
<span
class="text-balance text-lg text-gray-400 md:text-xl"
>
We Select The Best Strategies For You!
</span>
	<div class="relative h-10 w-[40rem]">
		<!-- Gradients -->
		<div
			class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
		/>
		<div
			class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
		/>
		<div
			class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
		/>

		<!-- Core component -->
		<!-- <Sparkles
			minSize={0.8}
			maxSize={1}
			particleDensity={50}
			className="w-full h-full"
			particleColor="#FFFFFF"
		/> -->

		<!-- Radial Gradient to prevent sharp edges -->
		<div
			class="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
		></div>
	</div>
    <RainbowButton onClick={triggerButtonClick}>
		<span>Activate AI Trading with 1-Click</span>
	</RainbowButton>

</div>


<StrategiesGrid />
<!-- <ActionsSection />
<ClientSection />
<SphereMask />
<PricingSection />
<CtaSection /> -->




