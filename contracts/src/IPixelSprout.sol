// SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IPixelSprout is IERC721 {
    error PixelSprout_MinterIsLocked();
    error PixelSprout_NotPixelsDAO();
    error PixelSprout_NotMinter();
    error PixelSprout_URIQueryForNonExistentToken();

    event PixelCreated(uint256 indexed tokenId);

    event PixelBurned(uint256 indexed tokenId);

    event PixelsDAOUpdated(address pixelsDAO);

    event MinterUpdated(address minter);

    event MinterLocked();

    function mint() external returns (uint256);

    function burn(uint256 _tokenId) external;

    function dataURI(uint256 _tokenId) external returns (string memory);

    function setPixelsDAO(address _pixelsDAO) external;

    function setMinter(address _minter) external;

    function lockMinter() external;
}
