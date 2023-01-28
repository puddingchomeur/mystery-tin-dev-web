---
sidebar_position: 0
title: Realistic Tank
description: Create a realistic tank controller in unity
---

# Realistic Tank 

![img alt](/img/realistic-tank.png)

[Youtube](https://www.youtube.com/watch?v=iBhd8xeTlgE)

## Etape 1 : Créer le Mesh du Tank
1. Créer un projet Unity.
2. Dans le dossier Scènes, renommer SampleScene en Gym. 
3. Reloader la scène.
4. Créer un nouveau empty, et le nommer Tank.
5. Y ajouter un enfant de type vide, et le nommer Meshes. 
6. A l'intérieur, créer un enfant de type Objet 3D cube et le nommer Base. 
7. Enlever le Box Collider. 
	Position : X 0 ; Y 0.5 ; Z 0.
	Rotation :
	Scale : X 2 ; Y 1 ; Z 3. 
8. Ajouter un autre enfant de type empty, et le nommer Pivot. 
	Position : X 0 ; Y 1 ; Z 0.
	Rotation :
	Scale : 
9. Créer un enfant de Pivot, et le nommer Turret. 
10. Créer un autre enfant de Pivot de type cylindre 3D, et le nommer Barrel.
11. Retirer le Capsule Collider. 
	Position : X 0 ; Y 0.15 ; Z 1.3.
	Rotation : X 90 ; Y 0 ; Z 0.
	Scale : X 0.2 ; Y 1 ; Z 0.2.
12. Créer un empty, et le nommer ShellSpawn. 
	Position : X 0 ; Y 1.3 ; Z 0.
	Rotation : X -90 ; Y 0 ; Z 0.
	Scale : X 1 ; Y 1 ; Z 1.

## Etape 2 : Créer le code du Tank
1. Créer un dossier Scripts à la racine du projet sous Assets.
2. A l'intérieur, créer un script C# et le nommer Tank.
3. Assigner le script à l'objet Tank dans la scène.

```csharp
using UnityEngine;  
  
public class Tank : MonoBehaviour  
{  
    // Transforms  
    public Transform turretPivot;  
    public Transform barrelPivot;  
    public Transform shellSpawn;  
    public Rigidbody rigidbody;  
  
    // Shell  
    public GameObject shellObj;  
    public float fireForce = 1500f;  
    public float shellLifetime = 1f;  
  
    // Base Movement  
    public float moveSpeed = 5f;  
    public float rotationSpeed = 40f;  
  
    // Turret Movement  
    public float turretPivotSpeed = 200f;  
    // Barrel Movement  
    public float barrelPivotSpeed = 100f;  
    public float minBarrelRotX = -20f;  
    public float maxBarrelRotX = 10f;  
    public bool invertMouseY = true;  
  
    private float _turretRotY;  
    private float _barrelRotX;  
    private float _rotY;  
  
    private void Start()  
    {        Cursor.lockState = CursorLockMode.Locked;  
        Cursor.visible = false;  
    }    void Update()  
    {        float mouseX = Input.GetAxis("Mouse X");  
        float mouseY = Input.GetAxis("Mouse Y");  
        float moveX = Input.GetAxis("Horizontal");  
        float moveY = Input.GetAxis("Vertical");  
        bool shootWasPressed = Input.GetMouseButtonDown(0);  
  
        Look(mouseX, mouseY);  
        Move(moveX, moveY);  
        Shoot(shootWasPressed);  
    }  
    private void Look(float mouseX, float mouseY)  
    {        _turretRotY += mouseX * turretPivotSpeed * Time.deltaTime;  
        turretPivot.rotation = Quaternion.Euler(0f, _turretRotY, 0f);  
  
        _barrelRotX += mouseY * barrelPivotSpeed * Time.deltaTime * (invertMouseY ? -1f : 1f);  
        _barrelRotX = Mathf.Clamp(_barrelRotX, minBarrelRotX, maxBarrelRotX);  
        barrelPivot.localRotation = Quaternion.Euler(_barrelRotX, 0f, 0f);  
    }  
    private void Move(float moveX, float moveY)  
    {        rigidbody.position += transform.forward * moveY * moveSpeed * Time.deltaTime;  
        rigidbody.rotation = Quaternion.Euler(rigidbody.rotation.eulerAngles + new Vector3(0f, moveX * rotationSpeed * Time.deltaTime, 0f));  
    }  
    private void Shoot(bool shootWasPressed)  
    {        
	    if (shootWasPressed)  
        {            GameObject shell = Instantiate(shellObj, shellSpawn.position, shellSpawn.rotation);  
            shell.GetComponent<Rigidbody>().AddForce(shell.transform.forward *fireForce);  
            Destroy(shell, shellLifetime);  
        }    
    }
}
```



## Etape 3 : Créer l'environnement
1. Créer un objet de type cube et le nommer Ground. 
	Position : X 0 ; Y -0.1 ; Z 0.
	Rotation : X 0 ; Y 0 ; Z 0.
	Scale : X 50 ; Y 0.2 ; Z 50.
2. *Créer un dossier à la racine du projet, et le nommer Materials. 
3. *Créer un matériel à l'intérieur du dossier, et le nommer Mat_Tank. 
4. *L'assigner à toutes les parties visibles du tank. 
5. . *Choisir une couleur (vert).
6. *Créer un autre matériel à l'intérieur du dossier, et le nommer Mat_Target. 
7. *Choisir une couleur (rouge).
8. *Créer un autre matériel à l'intérieur du dossier, et le nommer Mat_Shell.
9. *Créer un autre matériel à l'intérieur du dossier, et le nommer Mat_Ground.
10. Créer un objet de type cube 3D, et le nommer Target. 
11. Assigner le matériel Mat_Target. 
12. Ajouter à l'objet un Rigidbody. 
13. Créer un dossier à la racine, et le nommer Prefabs. 
14. Prendre le target dans la scène. Drag & drop dans le dossier Prefabs.
15. Déplacer aléatoirement en duplicant le target dans la scène. 

## Etape : A définir
1. Créer un empty, et le nommer Shell.
	Position : X 0 ; Y 0 ; Z 0.
	Rotation : X 0 ; Y 0 ; Z 0.
	Scale : X 1 ; Y 1 ; Z 1.
2. Ajouter un Capsule Collider, avec un Radius 0.1, Height 0.4, Direction Z-Axis. 
3. Ajouter un Rigidbody.
4. Créer un empty, et le nomme Meshes.
5. Créer une capsule enfant du Meshes et nommer Base.
	Position : X 0 ; Y 0 ; Z 0.
	Rotation : X 90 ; Y 0 ; Z 0.
	Scale : X 0.2 ; Y 0.2 ; Z 0.2.
6. Appliquer Mat_Shell.
7. Prendre l'empty Shell et drag & drop dans Prefabs.
8. Effacer l'instance de Shell dans la scène.


Légende : 
*Optionnel

Position : X ; Y ; Z.
Rotation : X ; Y ; Z.
Scale : X ; Y ; Z.