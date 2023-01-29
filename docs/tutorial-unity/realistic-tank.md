---
sidebar_position: 0
title: Realistic Tank
description: Create a realistic tank controller in unity
---

import Highlight from '@site/src/components/highlight';
import Thumbnail from '@site/src/components/thumbnail';

<Thumbnail name="Realistic Tank in Unity" imgFile="realistic-tank.png" link="https://www.youtube.com/watch?v=iBhd8xeTlgE"/>


## 0. Unity project

### 0.1. Setup the Unity project
1. ➕ **Create** or **Open** a new Unity project

2. ✏️ **Rename**  *SampleScene* to *Gym* in the *Scene* folder,  
3. 🖱🖱 **Double Click** on *Gym* to reload it

4. ❌ **Delete** *Global Volume*
5. ❌ **Delete** *Main Camera*

6. ➕ **Create** a **Folder** under *Assets*
7. ✏️ **Rename** it to *Scripts*

8. ➕ **Create** a **Folder** under *Assets*
9. ✏️ **Rename** it to *Prefabs*

---

## 1. Tank

### 1.1. Create the Tank
1. ➕ **Create** an **Empty** 
2. ✏️ **Rename** it to *Tank*
3. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

4. 📦 **Add** a *Box Collider* 

| Collider   | Properties   |
| ---------- | -------      |
| Is Trigger | false        |
| Material   |              |
| Center     | 0, 0.5, 0.15 |
| Size       | 2, 1, 3.325  |

5. 🍎 **Add** a *Rigidbody* 

| Rigidbody       | Properties         |
| --------------- | ------------------ |
| Mass            | 50                 |
| Drag            | 0                  |
| Angular Drag    | 0.05               |
| Use Gravity     | true               |
| Is Kinematic    | false              |
| Interpolate     | None               |
| Collision       | Continuous Dynamic |
| Freeze Position |                    |
| Freeze Rotation |                    |

6. ➕ **Create** an **Empty** child of *Tank* 
7. ✏️ **Rename** it to *Meshes*
8. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

9. ➕ **Create** a **Box** child of *Meshes* 
10. ✏️ **Rename** it to *Base*
11. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.5</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">2.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">3.0</Highlight> |

12. ❌ **Delete** the *Box Collider*

13. ➕ **Create** a **Box** child of *Meshes* 
14. ✏️ **Rename** it to *Front*
15. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.325</Highlight> | <Highlight color="#0000ff">1.5</Highlight> |
| Rotation  | <Highlight color="#be0000">45.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">2.0</Highlight> | <Highlight color="#026440">0.45</Highlight> | <Highlight color="#0000ff">0.45</Highlight> |

16. ❌ **Delete** the *Box Collider*

17. ➕ **Create** an **Empty** child of *Meshes* 
18. ✏️ **Rename** it to *TurretPivot*
19. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

20. ➕ **Create** a **Cylinder** child of *TurretPivot* 
21. ✏️ **Rename** it to *Turret*
22. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.2</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.5</Highlight> | <Highlight color="#026440">0.2</Highlight> | <Highlight color="#0000ff">1.5</Highlight> |

23. ❌ **Delete** the *Capsule Collider*

24. ➕ **Create** an **Empty** child of *TurretPivot* 
25. ✏️ **Rename** it to *BarrelPivot*
26. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.175</Highlight> | <Highlight color="#0000ff">0.7</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

27. ➕ **Create** a **Cylinder** child of *BarrelPivot* 
28. ✏️ **Rename** it to *Barrel*
29. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |
| Rotation  | <Highlight color="#be0000">90.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">0.2</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">0.2</Highlight> |

30. ❌ **Delete** the *Capsule Collider*

31. ➕ **Create** an **Empty** child of *Barrel* 
32. ✏️ **Rename** it to *ShellSpawn*
33. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">1.5</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">-90.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

### 1.2. Create the Tank Code
1. ➕ **Create** a **C# Script** inside *Scripts*
2. ✏️ **Rename** it to *RealisticTank*
3. 🖱🖱 **Double Click** on *RealisticTank* to open it in your code editor
4. 📚 **Copy** the code below

```cs
using UnityEngine;  
  
public class Tank : MonoBehaviour  
{  
    // Components  
    [Header("Components")]   
	public Transform cameraPivotTransform;  
    public Transform turretPivotTransform;  
    public Transform barrelPivotTransform;  
    public Transform shellSpawnTransform;  
    public Transform centerOfMassTransform;  
    public new Rigidbody rigidbody;  
    public Look look;  
    
    // Base Movement  
    [Header("Movement")]  
    public float moveSpeed = 5f;  
    public float aimMoveSpeed = 3f;  
    public float acceleration = 5f;  
    public float rotationSpeed = 80f;  
    public float aimRotationSpeed = 40f;  
    public bool invertRotationBackward = true;  
    public bool cameraBasedMovementWhenAiming = false;  
  
    // Shell  
    [Header("Shell")]  
    public GameObject shellPrefab;  
    public float fireForce = 1500f;  
  
    // Turret 
    [Header("Turret")]  
    public float turretPivotSpeed = 10f;  
    public bool returnInFrontWhenNotAiming = false;  
    public float returnInFrontSpeed = 2f;  
    
    // Barrel  
    [Header("Barrel")]  
    public float barrelPivotSpeed = 100f;  
    public float minBarrelRotX = -20f;  
    public float maxBarrelRotX = 10f;  
    public bool invertMouseY = true;  
  
    // Private Variables  
    private float _turretRotY;  
    private float _barrelRotX;  
    private float _rotY;  
    private float _moveX;  
    private float _moveY;  
    private float _mouseX;  
    private float _mouseY;  
    private float _lookX;  
    private bool _isAiming;  
    private float _speed;  
    private bool _shootWasPressed;  
  
    private void Start()  
    {        
	    // Lock the mouse in center screen  
        Cursor.lockState = CursorLockMode.Locked;  
        // Hide mouse  
        Cursor.visible = false;  
        // Set Center of Mass  
        rigidbody.centerOfMass = centerOfMassTransform.position;  
    } 
     
    private void Update()  
    {        
	    Inputs();  
        Look(_mouseX, _mouseY);  
        Shoot(_shootWasPressed);  
    } 
     
    private void FixedUpdate()  
    {        
	    Move(_moveX, _moveY);  
    }  
    
    private void Inputs()  
    {        
	    // Get inputs  
        _moveX = Input.GetAxis("Horizontal");  
        _moveY = Input.GetAxis("Vertical");  
        _mouseX = Input.GetAxis("Mouse X");  
        _mouseY = Input.GetAxis("Mouse Y");  
        _isAiming = Input.GetMouseButton(1);  
        _shootWasPressed = Input.GetMouseButtonDown(0);  
    }    
    
    /// <summary>  
    /// Make the Turret Rotate on the Yaw axis with mouseX input.    /// Make the Barrel Rotate on the Pitch axis with mouseY input.    /// </summary>  
    /// <param name="mouseX">Lateral Mouse Delta</param>    /// <param name="mouseY">Vertical Mouse Delta</param>    
    private void Look(float mouseX, float mouseY)  
    {        
	    if (_isAiming)  
        {            
	        // Align Turret when CameraPivot  
            turretPivotTransform.localRotation = Quaternion.Slerp(  
                turretPivotTransform.localRotation,  
                Quaternion.Euler(0f, cameraPivotTransform.eulerAngles.y - transform.eulerAngles.y, 0f),  
                aimRotationSpeed * Time.deltaTime);  
            // Pitch Aim of BarrelTransform  
            _barrelRotX += mouseY * barrelPivotSpeed * Time.deltaTime * (invertMouseY ? -1f : 1f);  
            _barrelRotX = Mathf.Clamp(_barrelRotX, minBarrelRotX, maxBarrelRotX);  
            barrelPivotTransform.localRotation = Quaternion.Euler(_barrelRotX, 0f, 0f);  
        }        
        else  
        {  
            // Align Barrel back with Front of Tank  
            if (returnInFrontWhenNotAiming)  
            {                
	            turretPivotTransform.localRotation = Quaternion.Slerp(  
                     turretPivotTransform.localRotation,   
Quaternion.identity,   
returnInFrontSpeed * Time.deltaTime);  
            }        
        }    
    }  
    
    /// <summary>  
    /// Move the Tank in the Forward direction with moveY input.    /// Move the Tank in the Right direction with moveX input.    /// </summary>    /// <param name="moveX">A & D Keys axis</param>    /// <param name="moveY">W & S Keys axis</param>    
    private void Move(float moveX, float moveY)  
    {        
	    // Acceleration  
        _speed = Mathf.Lerp(_speed, (_isAiming ? aimMoveSpeed : moveSpeed), acceleration * Time.deltaTime);  
        // Move in Camera Direction while Aiming  
        if (cameraBasedMovementWhenAiming && _isAiming)  
        {            
	        Vector3 direction = new Vector3(moveX, 0f, moveY);  
  
            // Return when No Movement Input  
            if (direction == Vector3.zero)  
                return;  
            // Movement Input relative to CameraPivot  
            Vector3 camDirection =  
                direction.x * cameraPivotTransform.right + direction.z * cameraPivotTransform.forward;  
            // Find Dot betwen Tank Forward and Camera Forward  
            float tankForwardCamForwardDot = Vector3.Dot(transform.forward, cameraPivotTransform.forward);  
            if (tankForwardCamForwardDot > 0f && moveY < 0f)  
            {                
	            // Align Backward with Direction based on Camera  
                rigidbody.rotation = Quaternion.RotateTowards(  
                    rigidbody.rotation,  
                    Quaternion.LookRotation(-camDirection),   
aimRotationSpeed * Time.deltaTime);  
                rigidbody.MovePosition(transform.position + -transform.forward * direction.magnitude * _speed * Time.deltaTime);  
            }            
            else  
            {  
                // Align Forward with Direction based on Camera  
                rigidbody.rotation = Quaternion.RotateTowards(  
                    rigidbody.rotation,  
                    Quaternion.LookRotation(camDirection),   
aimRotationSpeed * Time.deltaTime);  
                rigidbody.MovePosition(transform.position + transform.forward * direction.magnitude * _speed * Time.deltaTime);  
            }        
        }        
        // Default Movement  
        else  
        {  
            // Rotation  
            float yaw = (invertRotationBackward && moveY < 0f ? -moveX : moveX) * rotationSpeed * Time.deltaTime;  
            rigidbody.rotation = Quaternion.Euler(rigidbody.rotation.eulerAngles + new Vector3(0f, yaw, 0f));  
            // Position  
            rigidbody.MovePosition(transform.position + transform.forward.normalized * moveY * _speed * Time.deltaTime);  
        }   
    }  
    
    /// <summary>  
    /// Shoot a Shell projectile at ShellSpawn's Forward with configured fire force with shotWasPressed input.    /// </summary>    /// <param name="shootWasPressed">Mouse Button 0 Down</param>    
    private void Shoot(bool shootWasPressed)  
    {        
	    if (shootWasPressed)  
        {            
	        // Fire Shell at ShellSpawnTransform  
            GameObject shell = Instantiate(shellPrefab, shellSpawnTransform.position, shellSpawnTransform.rotation);  
            shell.GetComponent<Rigidbody>().AddForce(shell.transform.forward * fireForce);  
        }    
    }
}
```

5. 💾 **Save** the script to compile it
6. 🎯 **Assign** the script to *Tank* in Unity
7. 🖱 **Select** the *Tank* in your scene
8. 🎯 **Assign** the *TurretPivot* in *TurretPivotTransform*
9. 🎯 **Assign** the *BarrelPivot* in *BarrelPivotTransform*
10. 🎯 **Assign** the *ShellSpawn* in *ShellSpawnTransform*
11. 🎯 **Assign** the *Rigidbody* of the tank in *Rigidbody*

---

## 2. Shell

### 2.1. Create the Shell
1. ➕ **Create** an **Empty** 
2. ✏️ **Rename** it to *Shell*
3. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

4. 💊 **Add** a *Capsule Collider* 

| Collider   | Properties |
| ---------- | -------    |
| Is Trigger | false      |
| Material   |            |
| Center     | 0, 0, 0    | 
| Radius     | 0.1        |
| Height     | 0.4        |
| Direction  | Z-Axis     |


5. 🍎 **Add** a *Rigidbody* 

| Rigidbody       | Properties         |
| --------------- | ------------------ |
| Mass            | 5                  |
| Drag            | 0                  |
| Angular Drag    | 0.05               |
| Use Gravity     | true               |
| Is Kinematic    | false              |
| Interpolate     | None               |
| Collision       | Continuous Dynamic |
| Freeze Position |                    |
| Freeze Rotation |                    |

6. ➕ **Create** an **Empty** child of *Shell* 
7. ✏️ **Rename** it to *Meshes*
8. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

9. ➕ **Create** an **Capsule** child of *Meshes* 
10. ✏️ **Rename** it to *Base*
11. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">90.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">0.2</Highlight> | <Highlight color="#026440">0.2</Highlight> | <Highlight color="#0000ff">0.2</Highlight> |

### 2.2. Create the Shell Code
1. ➕ **Create** a **C# Script** inside *Scripts*
2. ✏️ **Rename** it to *Destroy*
3. 🖱🖱 **Double Click** on *Destroy* to open it in your code editor
4. 📚 **Copy** the code below

```cs
using UnityEngine;  
  
public class Destroy : MonoBehaviour  
{  
    // Lifetime  
    [Header("Lifetime")]  
    public bool isDestroyedOnCollisionEnter = false;  
    public bool doNotDestroyOnStart = false;  
    public float lifeTime = 1f;  
    
    void Start()  
    {        
	    if (doNotDestroyOnStart)  
            return;  
            
        Destroy(gameObject, lifeTime);  
    }  
    
    private void OnCollisionEnter(Collision collision)  
    {        
	    if (isDestroyedOnCollisionEnter)  
        {            
	        Destroy(gameObject);  
        }    
    }
}
```

5. 💾 **Save** the script to compile it
6. 🎯 **Assign** the script to *Shell* in Unity
7. ➡️ **Drag** the *Shell* from the hierarchy to the *Prefabs* folder
8. 🖱 **Select** the *Tank* in your scene
9. 🎯 **Assign** the *Shell* in *ShellPrefab*

---

## 3. Camera

### 3.1. Create the Camera
1. ➕ **Create** an **Empty** 
2. ✏️ **Rename** it to *CameraFollow*
3. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

4. ➕ **Create** an **Empty** child of *CameraFollow*
5. ✏️ **Rename** it to *CameraPivot*
6. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

7. ➕ **Create** a **Camera** child of *CameraPivot*
8. ✏️ **Rename** it to *Camera*
9. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">3.0</Highlight> | <Highlight color="#0000ff">-6.0</Highlight> |
| Rotation  | <Highlight color="#be0000">10.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

### 3.2. Create the Camera Follow Code
1. ➕ **Create** a **C# Script** inside *Scripts*
2. ✏️ **Rename** it to *Follow*
3. 🖱🖱 **Double Click** on *Follow* to open it in your code editor
4. 📚 **Copy** the code below

```cs
using UnityEngine;  
  
public class Follow : MonoBehaviour  
{  
    // Components  
    [Header("Components")]  
    public Transform targetTransform;  
    
    // Update  
    [Header("Update")]   
	public EUpdateType updateType = EUpdateType.FixedUpdate;  
    public enum EUpdateType  
    {  
        Update,  
        FixedUpdate,  
        LateUpdate  
    }  
    
    // Follow  
    [Header("Movement")]  
    public float followSpeed = 5f;  
  
    private void Update()  
    {        
	    if (updateType != EUpdateType.Update)  
            return;  
        transform.position = Vector3.Lerp(transform.position, targetTransform.position, followSpeed * Time.deltaTime);  
    } 
     
    private void FixedUpdate()  
    {        
	    if (updateType != EUpdateType.FixedUpdate)  
            return;  
        transform.position = Vector3.Lerp(transform.position, targetTransform.position, followSpeed * Time.fixedDeltaTime);  
    } 
     
    private void LateUpdate()  
    {        
	    if (updateType != EUpdateType.LateUpdate)  
            return;  
        transform.position = Vector3.Lerp(transform.position, targetTransform.position, followSpeed * Time.deltaTime);  
    }
}
```

5. ➕ **Save** the script to compile it
6. 🎯 **Assign** the script to *CameraFollow* in Unity
7. 🖱 **Select** the *CameraFollow* in your scene
8. 🎯 **Assign** the *Tank* in *TargetTransform*

### 1.3. Create the Camera Look Code
1. ➕ **Create** a **C# Script** inside *Scripts*
2. ✏️ **Rename** it to *Look*
3. 🖱🖱 **Double Click** on *Look* to open it in your code editor
4. 📚 **Copy** the code below

```cs
using UnityEngine;  
  
public class Look : MonoBehaviour  
{  
    // Components  
    [Header("Components")]  
    public Transform cameraPivotTransform;  
    
    // Yaw  
    [Header("Yaw")]   
	public bool allowYaw = true;  
    public float yawSpeed = 200f;  
    
    // Pitch   
	[Header("Pitch")]   
	public bool allowPitch = false;  
    public float pitchSpeed = 200f;  
    public float pitchMinAngle = -60f;  
    public float pitchMaxAngle = 60f;  
    public bool invertPitch = true;  
    
    // Private Variables  
    private float _mouseX;  
    private float _mouseY;  
    private float _yaw;  
    private float _pitch;  
    
    private void Update()  
    {        
	    Inputs();  
    }  
    private void Inputs()  
    {        
	    _mouseX = Input.GetAxis("Mouse X");  
        _mouseY = Input.GetAxis("Mouse Y");  
    }    
    
	    private void LateUpdate()  
    {        
	    LookAround(_mouseX, _mouseY);  
    }  
    
    private void LookAround(float mouseX, float mouseY)  
    {        
	    if (allowYaw)  
        {           
			_yaw += mouseX * yawSpeed * Time.deltaTime;  
        }  
        if (allowPitch)  
        {            
	        _pitch += (invertPitch ? -mouseY : mouseY) * pitchSpeed * Time.deltaTime;  
            _pitch = Mathf.Clamp(_pitch, pitchMinAngle, pitchMaxAngle);  
        }        
        
        cameraPivotTransform.localRotation = Quaternion.Euler(_pitch, _yaw, 0f);  
    }
}
```

5. 💾 **Save** the script to compile it
6. 🎯 **Assign** the script to *CameraFollow* in Unity
7. 🖱 **Select** the *CameraFollow* in your scene
8. 🎯 **Assign** the *CameraPivot* in *CameraPivotTransform*

---

## 4. Environment *Optional*

### 4.1. Create the Environment
1. ➕ **Create** an **Empty** 
2. ✏️ **Rename** it to *Environment*
3. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">1.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

4. ➕ **Create** a **Box** child of *Environment* 
5. ✏️ **Rename** it to *Ground*
6. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">-0.1</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">50.0</Highlight> | <Highlight color="#026440">0.2</Highlight> | <Highlight color="#0000ff">50.0</Highlight> |

---

## 5. Enemies *Optional*

### 5.1. Create the Enemies
1. ➕ **Create** a **Box**
2. ✏️ **Rename** it to *Target*
3. 🌎 **Set Transform** 

| Transform | X  | Y | Z |
| --------  | --- | --- | --- |
| Position  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">1.5</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Rotation  | <Highlight color="#be0000">0.0</Highlight> | <Highlight color="#026440">0.0</Highlight> | <Highlight color="#0000ff">0.0</Highlight> |
| Scale     | <Highlight color="#be0000">1.0</Highlight> | <Highlight color="#026440">3.0</Highlight> | <Highlight color="#0000ff">1.0</Highlight> |

4. 🍎 **Add** a *Rigidbody* 

| Rigidbody       | Properties         |
| --------------- | ------------------ |
| Mass            | 25                 |
| Drag            | 0                  |
| Angular Drag    | 0.05               |
| Use Gravity     | true               |
| Is Kinematic    | false              |
| Interpolate     | None               |
| Collision       | Continuous Dynamic |
| Freeze Position |                    |
| Freeze Rotation |                    |

5. ➡️ **Drag** the *Target* from the hierarchy to the *Prefabs* folder
6. 📚 **Copy** and place around in your scene
7. ♣️ **Try** to push them off the ground by shooting them!

...And done! 

You just leveled up!