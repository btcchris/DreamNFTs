//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Dreamlist {

    address owner;

    mapping(address => bool) dreamlistedAddresses;

    constructor() {
      owner = msg.sender;
    }

    modifier onlyOwner() {
      require(msg.sender == owner, "Ownable: caller is not the owner");
      _;
    }

    modifier isDreamlisted(address _address) {
      require(dreamlistedAddresses[_address], "Dreamlist: You need to be dreamlisted");
      _;
    }

    function addUser(address _addressToDreamlist) public onlyOwner {
      dreamlistedAddresses[_addressToDreamlist] = true;
    }

    function verifyUser(address _dreamlistedAddress) public view returns(bool) {
      bool userIsDreamlisted = dreamlistedAddresses[_dreamlistedAddress];
      return userIsDreamlisted;
    }

    function exampleFunction() public view isDreamlisted(msg.sender) returns(bool){
      return (true);
    }

}

