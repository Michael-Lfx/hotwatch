initSidebarItems({"constant":[["ONCE_INIT","Initialization value for static `Once` values."]],"enum":[["OnceState","Current state of a `Once`."]],"struct":[["Condvar","A Condition Variable"],["Once","A synchronization primitive which can be used to run a one-time initialization. Useful for one-time initialization for globals, FFI or related functionality."],["WaitTimeoutResult","A type indicating whether a timed wait on a condition variable returned due to a time out or not."]],"type":[["MappedMutexGuard","An RAII mutex guard returned by `MutexGuard::map`, which can point to a subfield of the protected data."],["MappedReentrantMutexGuard","An RAII mutex guard returned by `ReentrantMutexGuard::map`, which can point to a subfield of the protected data."],["MappedRwLockReadGuard","An RAII read lock guard returned by `RwLockReadGuard::map`, which can point to a subfield of the protected data."],["MappedRwLockWriteGuard","An RAII write lock guard returned by `RwLockWriteGuard::map`, which can point to a subfield of the protected data."],["Mutex","A mutual exclusion primitive useful for protecting shared data"],["MutexGuard","An RAII implementation of a \"scoped lock\" of a mutex. When this structure is dropped (falls out of scope), the lock will be unlocked."],["ReentrantMutex","A mutex which can be recursively locked by a single thread."],["ReentrantMutexGuard","An RAII implementation of a \"scoped lock\" of a reentrant mutex. When this structure is dropped (falls out of scope), the lock will be unlocked."],["RwLock","A reader-writer lock"],["RwLockReadGuard","RAII structure used to release the shared read access of a lock when dropped."],["RwLockUpgradableReadGuard","RAII structure used to release the upgradable read access of a lock when dropped."],["RwLockWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."]]});