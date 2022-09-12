// SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Checkpointable} from "./ERC721Checkpointable.sol";
import "./IPixelSprout.sol";
import "./IProxyRegistry.sol";

contract PixelSprout is IPixelSprout, Ownable, ERC721Checkpointable {
    address public pixelsDAO;

    uint256 private _currentPixelsId;

    address public minter;
    bool public isMinterLocked;

    IProxyRegistry public immutable i_proxyRegistry;

    string private _contractURIHash = "xxx";

    constructor(
        address _daoAddress,
        address _minter,
        IProxyRegistry _proxyRegistry
    ) ERC721("PixelSprout", "PIXELS") {
        pixelsDAO = _daoAddress;
        minter = _minter;
        i_proxyRegistry = _proxyRegistry;
    }

    // Modifiers
    modifier whenMinterNotLocked() {
        if (isMinterLocked) {
            revert PixelSprout_MinterIsLocked();
        }
        _;
    }

    modifier onlyPixelsDAO() {
        if (msg.sender != pixelsDAO) {
            revert PixelSprout_NotPixelsDAO();
        }
        _;
    }

    modifier onlyMinter() {
        if (msg.sender != minter) {
            revert PixelSprout_NotMinter();
        }
        _;
    }

    function mint() external onlyMinter returns (uint256) {
        _currentPixelsId += 1;
        _mint(minter, _currentPixelsId);
        emit PixelCreated(_currentPixelsId);
        return _currentPixelsId;
    }

    function burn(uint256 _tokenId) external onlyMinter {
        _burn(_tokenId);
        emit PixelBurned(_tokenId);
    }

    function dataURI(uint256 _tokenId) external view returns (string memory) {
        if (!_exists(_tokenId)) {
            revert PixelSprout_URIQueryForNonExistentToken();
        }
        return "";
    }

    function setPixelsDAO(address _pixelsDAO) external onlyPixelsDAO {
        pixelsDAO = _pixelsDAO;
        emit PixelsDAOUpdated(_pixelsDAO);
    }

    function setMinter(address _minter) external onlyOwner whenMinterNotLocked {
        minter = _minter;
        emit MinterUpdated(_minter);
    }

    function contractURI() public view returns (string memory) {
        return string(abi.encodePacked("ipfs://", _contractURIHash));
    }

    function setContractURIHash(string memory newContractURIHash)
        external
        onlyOwner
    {
        _contractURIHash = newContractURIHash;
    }

    function lockMinter() external onlyOwner whenMinterNotLocked {
        isMinterLocked = true;
        emit MinterLocked();
    }

    /**
     * @notice Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
     */
    function isApprovedForAll(address owner, address operator)
        public
        view
        override(IERC721, ERC721)
        returns (bool)
    {
        // Whitelist OpenSea proxy contract for easy trading.
        if (i_proxyRegistry.proxies(owner) == operator) {
            return true;
        }
        return super.isApprovedForAll(owner, operator);
    }
}
