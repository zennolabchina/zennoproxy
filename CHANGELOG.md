#Changelog
## [1.0.27.6] - 2023-11-07
- BUG modification
  - sv5-proxy-manager sendSyncRefresh returns abnormal log printing modification;
   - SAFE_JSON_PARSE removes abnormal log printing;
   - Create invitation code and set default code;

## [1.0.27.3] - 2023-10-30
- bug modification;
   - Exception in obtaining user traffic package list; (remove local platform id parameter condition)
   - Exception in obtaining user traffic package platform list; (remove local platform id parameter condition)

## [1.0.27.2] - 2023-10-24
- Add reset password API;
- Get administrator log added date query.

## [1.0.27] - 2023-10-20
- Agency Platform/Regional Data Management API;
- Modification of service sticky parameters.

## [1.0.26] - 2023-10-18
- Function optimization
  - The administrator obtains the user list and adds device IP search conditions;
  - Disable traffic packets: Add status judgment to traffic packet detection;
  - Disable user: Modify the status of all traffic packets of the user to disabled.

## [1.0.25.4] - 2023-10-14
- Invitation code management API added.

## [1.0.25.3] - 2023-10-11
- Device management related API added.

## [1.0.25] - 2023-10-05
- API optimization:
   - s5 traffic package: add, update, delete, deactivate;
   - s5 backup traffic package (function merged into s5 traffic package);
   - Device: add, delete, get pagination data;
   - User: Modify status (Administrator).

- Statistics API
   - Added s5 statistics to all user traffic usage statistics;
   - Added s5 statistics for all user traffic usage statistics (grouped by country);
   - Added s5 statistics, traffic statistics of the most used users;
   - Added s5 traffic package recent traffic allocation statistics.

- Version optimization

## [1.0.24] - 2023-09-24
- s5 traffic package management API modification: Pagination traffic package administrators can obtain all traffic packages of the current platform, and super administrators can obtain all traffic packages of all platforms.
- s5 standby traffic package management API modification: Pagination standby traffic package administrators can obtain all standby traffic packages of the current platform, and super administrators can obtain all standby traffic packages of all platforms.
- User management API modification: Pagination user data administrators can obtain all users of the current platform, and super administrators can obtain all users of all platforms.
- Traffic package expiration processing modification: No longer set to negative numbers, directly transferred to standby traffic packages (with the status of expired).
- s5 traffic package management API pagination query information modification (multi-table information).
- s5 standby traffic package management API pagination query information modification (multi-table information).
- User management API pagination query information modification (multi-table information).

## [1.0.23] - 2023-09-13
- Added port-IP query interface to s5 service API;
- Adjusted web directory structure;
- Modified some Chinese translations.

## [1.0.22] -2023-09-07
- Local configuration of the server and modification of the web client version;
- User API creation invitation code parameter format adjustment, removing device_ IP;
- Server local process optimization;
- Modify the web common.js login server address;
- MySQL pagination operation bug modification.

## [1.0.21]
- User registration defaults to removing spaces before and after the username;
- User registration defaults to removing the spaces before and after the password;
- User login defaults to removing the spaces before and after the username;
- User login defaults to removing the spaces before and after the password;
- SV backup traffic packet initialization user bug modification.

## [1.0.20]
- User API to obtain user pagination data parameter format adjustment support using user_ ID;
- S5 Traffic Packet Management - API for Obtaining Traffic Packet Paging Data Parameter Format Adjustment Support Using User_ ID;
- S5 Backup Traffic Packet Management - API for Obtaining Traffic Packet Paging Data Parameter Format Adjustment Support Using User_ ID.

## [1.0.19]
- User API creation invitation code format modification (supports parameter device IP, port size, please refer to API documentation for details);
- User API pagination API parameter format adjustment;
- S5 traffic packet management - API pagination API parameter format adjustment;
- S5 backup traffic packet management - API paging API parameter format adjustment;
- S5 Service - API Paging API Parameter Format Adjustment;
- Add new devices to the device API;
- Device - API Add/Remove Device;
- Device - API added to obtain paging devices;
- Netnut proxy sid length fixed 8 bits.

## [1.0.18]
- User - API Get User Paging Data (Administrator);
- S5 Traffic Packet Management - API Obtaining Traffic Packet Paging Data;
- S5 Backup Traffic Packet Management - API Obtaining Traffic Packet Paging Data.

## [1.0.17]
- The administrator modifies the account status (enabled/disabled) and adds APIs;
- Verification of account binding device during login process; (Solve the problem of using other platform accounts to log in before, which resulted in the use of traffic);
- S5 Traffic Packet Management - API Add Traffic Packet Parameter User_ Change ID to user_ Name;
- S5 Traffic Packet Management - API Update Traffic Packet Parameter User_ Remove the ID;
- S5 Traffic Packet Management - API Delete Traffic Packet Parameter user_ Remove the ID;
- S5 Traffic Packet Management - API Deactivate Traffic Packet Parameter user_ Remove the ID;
- S5 Backup Traffic Packet Management - API Add Traffic Packet Parameter User_ Change ID to user_ Name;
- S5 Backup Traffic Packet Management - API Update Traffic Packet Parameter User_ Remove the ID;
- S5 Backup Traffic Packet Management - API Delete Traffic Packet Parameter user_ Remove the ID.

## [1.0.16]
- S5 service obtains service paging data;
- Password modification for forwarding proxy documents;
- Password encryption for login users;
- Proxy platform password encryption;
- Add and disable traffic packet APIs;
- Addition of backup traffic packet function;
- Add administrator operation logs;
- Partial bug modifications;
- Code optimization;
- Database.
Add Table: sv5_ Flow_ Stand by
Add Table: sv5_ Admin_ Log
- BUG modification
Proxy password bug modification;
Agent area city bug modification;

