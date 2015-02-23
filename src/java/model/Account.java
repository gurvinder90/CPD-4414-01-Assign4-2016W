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

package model;

/**
 * Stores an account balance and provides some basic methods to manipulate the balance
 */
public class Account {
    /**
     * Returns the current total balance of the account
     * @return - the balance
     */
    public double getBalance() {
        return -999;
    }
    
    /**
     * Adds an amount of cash to the total balance of the account
     * @param cash - the cash to deposit
     */
    public void deposit(double cash) {
        
    }
    
    /**
     * Deducts an amount of cash from the total balance of the account
     * @param cash - the cash to withdraw
     */
    public void withdraw(double cash) {
    
    }
    
    /**
     * Deducts all cash from the total balance of the account
     */
    public void close() {
        
    }
}
