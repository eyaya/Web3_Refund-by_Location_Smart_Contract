// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContactBook{
    address private owner;

    struct Contact{
        string name;
        address wallet;
        string phone;

    }

    Contact[] private contacts;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "only owner can call this function");
        _;
    }


    function addContact( string memory _name, address _wallet, string memory _phone) public onlyOwner{
        contacts.push(Contact(_name,_wallet,_phone));
    }

    function removeContact(uint _index) public onlyOwner{
        require(_index < contacts.length, "index out of range");
        for ( uint i=_index; i< contacts.length - 1; i++){
            contacts[i] = contacts[i+1];
        }
        contacts.pop();
    }

    function getContacts() public view returns (Contact[] memory){
        return contacts;
    }
}