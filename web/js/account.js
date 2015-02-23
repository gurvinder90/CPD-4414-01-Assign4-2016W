/* 
 * Copyright 2015 Len Payne <len.payne@lambtoncollege.ca>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function refreshBalance() {
    $.ajax({
       url: 'account',
       method: 'GET',                   
       success: function(data) {
           $('#balance').text(data);
       }
    });
}
function withdraw() {
    $.ajax({
       url: 'account',
       method: 'POST',
       data: { 'withdraw' : $('#withdraw').val()},
       success: refreshBalance
    });
}
function deposit() {
    $.ajax({
       url: 'account',
       method: 'POST',
       data: { 'deposit' : $('#deposit').val()},
       success: refreshBalance
    });
}
function closeAccount() {
    $.ajax({
       url: 'account',
       method: 'POST',
       data: { 'close' : true },
       success: refreshBalance
    });
}