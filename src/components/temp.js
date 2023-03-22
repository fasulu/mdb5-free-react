// Output: {"data":{"errors:[{"value":"","msg":"Invalid value","param":"clientId","location":"body"},{"msg":"Invalid value","param":"client_password","location":"body"}]},"status":200,"statusText":"OK","headers":{"content-length":"152","content-type":"application/json; charset=utf-8"},"config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"adapter":["xhr","http"],"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"env":{},"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json"},"method":"post","url":"http://localhost:9001/client/clientref","data":"{\"client_reference\":\"bs61864\"}"},"request":{}}


// {
//     "client_title": "1",
//     "client_firstname": "first name",
//     "client_middlename": "mname",
//     "client_surname": "surname",
//     "client_namechange": "none",
//     "client_NINO": "BG343444Q",
//     "client_dateofbirth": "1903-03-05",
//     "client_sex": "Male",
//     "client_lived_abroad": "Yes",
//     "client_moved_to_current_address": "2007-02-19",
//     "client_postcode": "jk9 4th",
//     "client_address_line1": "first line of address",
//     "client_address_line2": "second line of address",
//     "client_address_line3": "third line of address",
//     "client_address_line4": "fourth line of address",
//     "client_is_rented_property": "Yes",
//     "client_landlord_name": "landloord name",
//     "client_landlord_address": "Connecticut Road, New York WA23 456",
//     "client_landlord_tenancy_type": "Assured Shorthold Tenancy(AST)",
//     "client_landlord_info_about_this_address": "Unfurnished property",
//     "client_is_correspondence_address": "Yes",
//     "client_correspondence_type": "work",
//     "client_correspondence_postcode": "rt45 4rt",
//     "client_correspondence_address_line1": "corres line 1",
//     "client_correspondence_address_line2": "corres line 2k",
//     "client_correspondence_address_line3": "corres line 3",
//     "client_correspondence_address_line4": "corres line 4",
//     "client_placed_by_local_authority": "Yes",
//     "client_if_yes_local_authority": "Birmingham city council",
//     "client_telephone_home": "03254125698",
//     "client_telephone_mobile": "05687458963",
//     "client_telephone_work": "02457895623",
//     "client_email": "asdfgf@msn.co.uk",
//     "client_ethnicity": "1",
//     "client_nationality": "1",
//     "client_sex_orient": "1",
//     "client_religion": "1",
//     "client_illness": "no",
//     "client_language_prefer": "1",
//     "client_interpreter": "No",
//     "client_current_tenure": "Birmingham city council tenant",
//     "client_current_tenure_TenancyRefNo": "mm45632178Lm",
//     "client_from_which_country": "2",
//     "client_connection_to_birmingham": '1', '2', '3',
//     "client_password":"$2a$10$Bhs4YT6hrJuu6dWMxwJ8d.L2n9KIXEy9km5beWVbjGmYFQcFhiSia",
//     "client_memorable_date": "2000-01-1",
//     "client_registration_date":  "{{CurrentDateTime}}",
//     "client_status": "active",
//     "client_comments": "None"
// }

// {
//     "client_title": "Mr",
//     "client_firstname": "ranual",
//     "client_middlename": "-",
//     "client_surname": "facron",
//     "client_namechange": "none",
//     "client_NINO": "aa123456b",
//     "client_dateofbirth": "1955-06-17",
//     "client_sex": "Male",
//     "client_lived_abroad": "Yes",
//     "client_moved_to_current_address": "2009-11-25",
//     "client_postcode": "B55 8KK",
//     "client_address_line1": "15",
//     "client_address_line2": "holder Road",
//     "client_address_line3": "corporate building",
//     "client_address_line4": "Birmingham",
//     "client_is_rented_property": "Yes",
//     "client_landlord_name": "Currys",
//     "client_landlord_address": "76 Connecticut Road, New York WA23 456",
//     "client_landlord_tenancy_type": "Assured Shorthold Tenancy(AST)",
//     "client_landlord_info_about_this_address": "Unfurnished property",
//     "client_is_correspondence_address": "Yes",
//     "client_correspondence_type": "work",
//     "client_correspondence_postcode": "ls12 4sd",
//     "client_correspondence_address_line1": "15 Ash Road",
//     "client_correspondence_address_line2": "kensington road",
//     "client_correspondence_address_line3": "london",
//     "client_correspondence_address_line4": "England",
//     "client_placed_by_local_authority": "Yes",
//     "client_if_yes_local_authority": "Birmingham city council",
//     "client_telephone_home": "02014561239",
//     "client_telephone_mobile": "07881234567",
//     "client_telephone_work": "02027985423",
//     "client_email": "client3@yahoo.com",
//     "client_ethnicity": "british",
//     "client_nationality": "British",
//     "client_sex_orient": "Hetrosexual or straight",
//     "client_religion": "christian",
//     "client_illness": "no",
//     "client_language_prefer": "English",
//     "client_interpreter": "No",
//     "client_current_tenure": "Birmingham city council tenant",
//     "client_current_tenure_TenancyRefNo": "mm45632178Lm",
//     "client_from_which_country": "A British Citizen",
//     "client_connection_to_birmingham": "None of the above",
//     "client_password":"$2a$10$Bhs4YT6hrJuu6dWMxwJ8d.L2n9KIXEy9km5beWVbjGmYFQcFhiSia",
//     "client_memorable_date": "2000-01-15",
//     "client_registration_date":  "{{CurrentDateTime}}",
//     "client_status": "active",
//     "client_comments": "None"
// }


const test = [
    {
        "client_title": "4", "client_firstname": "adsdsafasd", "client_middlename": "gf", "client_surname": "dsfggaafd", "client_namechange": "none", "client_NINO": "qq123456q", "client_dateofbirth": "-2114380800", "client_sex": "male", "client_lived_abroad": "no", "client_moved_to_current_address": "95472000", "client_postcode": "ty67 6ty", "client_address_line1": "dfgdfhfh", "client_address_line2": "hfjfgjgj", "client_address_line3": "asdfasdfasdf", "client_address_line4": "hkhkfghdf", "client_is_rented_property": "no", "client_landlord_name": "none", "client_landlord_address": "none", "client_landlord_tenancy_type": "dont know", "client_landlord_info_about_this_address": "none", "client_communication_address": "current address", "client_correspondence_type": "none", "client_correspondence_postcode": "", "client_correspondence_address_line1": "", "client_correspondence_address_line2": "", "client_correspondence_address_line3": "", "client_correspondence_address_line4": "", "client_placed_by_local_authority": "no", "client_if_yes_local_authority": "none", "client_telephone_home": "07894561231", "client_telephone_mobile": "03214587454", "client_telephone_work": "02451254142", "client_email": "adkfjhasdkf@skjdf.com", "client_ethnicity": "prefer not to say", "client_nationality": "non-eea national", "client_sex_orient": "prefer not to say", "client_religion": "prefer not to say", "client_illness": "no", "client_language_prefer": "english", "client_interpreter": "no", "client_current_tenure": "", "client_from_which_country": "none of the above", "client_connection_to_birmingham": "17", "client_password": "$2a$10$a0zbeYyKblROQrMlW/nK..ChUx6PCWnYCqr5zWddEe0pmZVUsxRI6", "client_memorable_date": "-2114380800", "client_registration_date": "2023-03-18T20:39:59.000Z", "client_status": "active", "client_comments": "none", "_id": "641621adf9989c0fac606114", "__v": 0
    }
]

AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
code
: 
"ERR_BAD_REQUEST"
config
: 
{transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
message
: 
"Request failed with status code 404"
name
: 
"AxiosError"
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
response
: 
{data: {…}, status: 404, statusText: 'Not Found', headers: AxiosHeaders, config: {…}, …}
stack
: 
"AxiosError: Request failed with status code 404\n    at settle (http://localhost:3000/static/js/bundle.js:94625:12)\n    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:93333:66)"
[[Prototype]]
: 
Error