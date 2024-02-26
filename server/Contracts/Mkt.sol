// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// create an own Mkt token 
contract Mkt is Ownable, ERC20Burnable {

    // errors
    error Mkt_NotZeroAccount();
    error Mkt_AmountMustBeMoreThanZero();

    // mappings
    mapping(address => uint256) public s_UserToAmountMined;
    mapping(address => uint256) public s_UserToRewardMined;

    constructor() ERC20("makeit", "MKT") {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }

    // transfer to a specific address
    function mint(address _to, uint256 _amount) external onlyOwner {
        require(_to != address(0), "Mkt_NotZeroAccount");
        require(_amount > 0, "Mkt_AmountMustBeMoreThanZero");

        s_UserToAmountMined[_to] += _amount;
        _mint(_to, _amount);
    }

    // burn token
    function burn(uint256 _amount) public onlyOwner override {
        _burn(msg.sender, _amount);
    }

    // rewards
    function reward(address _recipient, uint256 _amount) external onlyOwner {
        require(_recipient != address(0), "Mkt_NotZeroAccount");
        require(_amount > 0, "Mkt_AmountMustBeMoreThanZero");

        s_UserToRewardMined[_recipient] += _amount;
        _mint(_recipient, _amount);
    }
}
