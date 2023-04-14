import axios from "axios";
import React, { UseEffect, Component } from 'react';
import { QueryHelper } from "./queryHelper";

/* 
Geoservice Caller does the following:
1. Receives the state, which the is user uploaded file's content body
2. Takes one row and uses that row's information to create parameters for the geoservice call request
3. It makes the call request, obtains the data, and then sends it back to App

Blockers:
Stuck on sending the data back to App without creating an infinite loop because 
geoserviceCaller rerenders upon receiving information, and when it rerenders, it sends info again
*/




const geoserviceCaller = (props) => {
    // Mocked data
    const response = {
        "data": {
        "display": {
            "AddressRangeKeys": [
            {
                "Key": "",
                "Value": "Ordinary Address Range"
            }
            ],
            "AddressRangeList": [
            {
                "b7sc": "46149001",
                "bin": "4071973",
                "high_address_number": "           61-40",
                "low_address_number": "           61-40",
                "street_name": "SAUNDERS STREET                 ",
                "tpad_bin_status": "N/A",
                "type": " ",
                "type_meaning": "Ordinary Address Range"
            }
            ],
            "CompleteBINList": [
            {
                "bin": "4071973",
                "tpad": null
            }
            ],
            "HighB7SCList": [
            {
                "b7sc": "41279001",
                "streetName": "  62 AVENUE                     "
            }
            ],
            "LowB7SCList": [
            {
                "b7sc": "44349001",
                "streetName": "ELIOT AVENUE                    "
            }
            ],
            "SimilarNamesList": [],
            "in_boro": "4",
            "in_func_code": "1B",
            "in_hnd": "6140            ",
            "in_stname1": "SAUNDERS STREET                 ",
            "in_unit": "",
            "out_No_Parking_lanes": " 2",
            "out_No_Total_Lanes": " 3",
            "out_No_Traveling_lanes": " 1",
            "out_TPAD_bin": "N/A",
            "out_TPAD_bin_status": "N/A",
            "out_TPAD_conflict_flag": "N/A",
            "out_ad": "39",
            "out_alx": "No Split/Change",
            "out_atomic_polygon": "201",
            "out_b10sc1": "46149001010",
            "out_bbl": "4030760022",
            "out_bbl_block": "3076",
            "out_bbl_lot": "22",
            "out_bid": "",
            "out_bike_lane": "  ",
            "out_bike_traffic_direction": "  ",
            "out_bin": "4071973",
            "out_bin_status": "N/A",
            "out_blockface_id": "0092267829",
            "out_boe_lgc_pointer": "1",
            "out_boe_preferred_b7sc": "46149001 / SAUNDERS STREET                 ",
            "out_boro_name1": "QUEENS   ",
            "out_cd": "06",
            "out_cd_eligible": "Not CD Eligible",
            "out_cdta_2020": "QN06",
            "out_census_block_2000": "2001",
            "out_census_block_2010": "2000",
            "out_census_block_2020": "2000",
            "out_census_block_suffix_2000": " ",
            "out_census_block_suffix_2010": " ",
            "out_census_block_suffix_2020": " ",
            "out_census_tract_1990": " 687  ",
            "out_census_tract_2000": " 687  ",
            "out_census_tract_2010": " 687  ",
            "out_census_tract_2020": " 687  ",
            "out_co": "30",
            "out_coincident_seg_cnt": "1",
            "out_com_dist": "406",
            "out_condo_base_bbl": "N/A",
            "out_condo_bill_scc": " ",
            "out_condo_billing_bbl": "N/A",
            "out_condo_flag": "Non-Condo",
            "out_condo_num": "N/A",
            "out_coop_num": "0972",
            "out_corner_code": "SW",
            "out_curve_flag": "None",
            "out_dcp_zoning_map": "13C",
            "out_dot_st_light_contract_area": "4",
            "out_dsny_snow_priority": "S",
            "out_dsny_snow_priority_str": null,
            "out_ed": "041",
            "out_error_message": "                                                                                ",
            "out_error_message2": "ADDR NUMBER ALTERED: HYPHEN INSERTED                                            ",
            "out_fdny_id": "       ",
            "out_feature_type": "Street",
            "out_fire_bat": "46",
            "out_fire_co": "Ladder 136",
            "out_fire_co_str": "Ladder 136",
            "out_fire_div": "14",
            "out_from_additional_lgcs1": "  ",
            "out_from_additional_lgcs2": "  ",
            "out_from_additional_lgcs3": "  ",
            "out_from_additional_lgcs4": "  ",
            "out_from_additional_lgcs5": "  ",
            "out_from_dcp_preferred_lgcs1": "01",
            "out_from_dcp_preferred_lgcs2": "  ",
            "out_from_dcp_preferred_lgcs3": "  ",
            "out_from_dcp_preferred_lgcs4": "  ",
            "out_from_dcp_preferred_lgcs5": "  ",
            "out_from_node": "0049781",
            "out_generic_id": "0008476",
            "out_grc": "00",
            "out_grc2": "01",
            "out_health_area": "19.30",
            "out_health_center_dist": "46",
            "out_hi_hns": "61-98           ",
            "out_hi_x_coord": "1021052",
            "out_hi_y_coord": "0205622",
            "out_high_bbl_condo": "N/A",
            "out_hnd": "61-40           ",
            "out_hurricane_zone": " 6",
            "out_individual_segment_length": "00558",
            "out_interior_flag": "Not Interior Lot",
            "out_irreg_flag": "Not Irregular Lot",
            "out_lat_property": "40.731008",
            "out_latitude": "40.731448",
            "out_lion_key_face_code": "4126",
            "out_lion_key_sequence_number": "00010",
            "out_lo_hns": "61-00           ",
            "out_lo_x_coord": "1020584",
            "out_lo_y_coord": "0205925",
            "out_lon_property": "-73.867683 ",
            "out_longitude": "-73.868172 ",
            "out_low_bbl_condo": "N/A",
            "out_mc": "2",
            "out_no_cross_street_calculation_flag": " ",
            "out_nta": "QN18 /                                                                            ",
            "out_nta_2020": "QN0601",
            "out_num_of_bldgs": "1",
            "out_num_of_blockfaces": "1",
            "out_nypd_id": "       ",
            "out_physical_id": "0009880",
            "out_police_area": " ",
            "out_police_patrol_boro": "Queens North",
            "out_police_pct": "112",
            "out_police_sector": "112B",
            "out_preferred_lgc": "46149001",
            "out_preferred_street_name": "SAUNDERS STREET                 ",
            "out_puma_code": "04108",
            "out_reason_code": " ",
            "out_reason_code2": "2",
            "out_right_of_way_type": " ",
            "out_roadway_type": "Street",
            "out_rpad_bldg_class": "C6",
            "out_rpad_scc": "1",
            "out_san_bulk": "ETF  ",
            "out_san_commercial_waste_zone": " QN2",
            "out_san_dist_section": "406 / 062",
            "out_san_org_pick_up": "EF   ",
            "out_san_recycle": "EF ",
            "out_san_reg": "TF   ",
            "out_san_sched": "2D",
            "out_sanborn_boro": "4",
            "out_sanborn_page": "004 ",
            "out_sanborn_volume": "20 ",
            "out_school_dist": "28",
            "out_sd": "12",
            "out_segment_azm": "327",
            "out_segment_id": "0081563",
            "out_segment_len": "558",
            "out_segment_orientation": "4",
            "out_segment_type": "Undivided",
            "out_sos_ind": "Address is on the right when facing from ELIOT AVENUE to 62 AVENUE",
            "out_spec_addr_flag": " ",
            "out_speed_limit": "25",
            "out_stname1": "SAUNDERS STREET                 ",
            "out_street_width_irregular": " ",
            "out_street_width_max": " 30",
            "out_street_width_min": " 30",
            "out_stroll_key": "                   ",
            "out_tax_map": "4",
            "out_tax_section": "16",
            "out_tax_volume": "04",
            "out_to_additional_lgcs1": "  ",
            "out_to_additional_lgcs2": "  ",
            "out_to_additional_lgcs3": "  ",
            "out_to_additional_lgcs4": "  ",
            "out_to_additional_lgcs5": "  ",
            "out_to_dcp_preferred_lgcs1": "01",
            "out_to_dcp_preferred_lgcs2": "  ",
            "out_to_dcp_preferred_lgcs3": "  ",
            "out_to_dcp_preferred_lgcs4": "  ",
            "out_to_dcp_preferred_lgcs5": "  ",
            "out_to_node": "0049858",
            "out_traffic_dir": "A",
            "out_truck_route_type": " ",
            "out_unit": "              ",
            "out_usps_city_name": "REGO PARK                ",
            "out_vacant_flag": "Not Vacant",
            "out_valid_lgc_1": "01",
            "out_valid_lgc_2": "  ",
            "out_valid_lgc_3": "  ",
            "out_valid_lgc_4": "  ",
            "out_vanity_sos": "R",
            "out_wa1_message": "                                                                                ",
            "out_x_coord": "1020786",
            "out_x_coord_property": "1020922",
            "out_y_coord": "0205790",
            "out_y_coord_property": "0205630",
            "out_zip_code": "11374"
        },
        "root": null
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
        "access-control-allow-origin": "*",
        "cache-control": "private",
        "connection": "keep-alive",
        "content-length": "5893",
        "content-type": "application/json; charset=utf-8",
        "date": "Thu, 13 Apr 2023 20:44:30 GMT",
        "server": "Microsoft-IIS/10.0",
        "x-aspnet-version": "4.0.30319",
        "x-final-url": "https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/function_1B?Borough=4&AddressNo=6140&StreetName=Saunders%20Street&Key=r4u7xXABDHG7JaNd",
        "x-powered-by": "ASP.NET"
        },
        "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": null
        },
        "method": "get",
        "url": "https://cors-anywhere.herokuapp.com/https://geoservice.planning.nyc.gov/geoservice/geoservice.svc/function_1B?Borough=4&AddressNo=6140&StreetName=Saunders Street&Key=r4u7xXABDHG7JaNd"
        },
        "request": {}
    }

    const dataArray = Object.entries(response.data.display)
}


/*
const geoserviceCaller = (props) => {
    const full_url = props.proxy + props.f1B_url
    const response = axios
        .get(full_url)
        .then((res) => console.log(res))
        .catch((err) => {console.log("Err", err)}) 
    console.log(props.importBody)
};
*/

export default geoserviceCaller;

