# Some tips on debugging python installation on Windows:

If you have python installed do the following check:
1. Open a command promt, e.g. `Menu`, then type `cmd` then `Enter`.
2. Type `python -V` and press Enter. If an error message appears, your python installation should be added to the path. 

### Adding python to path

(Skip step 0 if you know where your python installation is located.)

0. Open the python interpreter. Type 
```
>>> import os
>>> import sys
>>> os.path.dirname(sys.executable)
C:/Path/to/your/installation
``` 
1. Open `Control Panel`, `System`, `Advanced system settings`
![System Properties](https://matthewhorne.me/wp-content/uploads/2016/04/windows-system-properties.png)
2. Click `Environment Variables` select `Path` `Edit`
![Path](https://matthewhorne.me/wp-content/uploads/2016/04/windows-system-variables-path.png)
3. Click `New` and enter complete path to your python installation:
![Add Path](https://matthewhorne.me/wp-content/uploads/2016/04/add-new-enviroment-variable.png)
4. Click `OK` on all open windows.
5. To check success, open a new command window and type `echo %PATH%`

### Installing packages with pip
Before installing packages do on the command window:
```
pip install --upgrade pip
```

If `pip` is not found you can either add it to the path, of just use
```
python -m pip install --upgrade pip
python -m pip install requests
python -m pip install Flask
```

# Installing Python for DAT310

## Check version
Many operating systems have python preinstalled. 
To check which version you have preinstalled open a terminal and type
```python -V```

You should have python version 3.6 or higher.

## Installation
If you do not have python preinstalled, download and install from https://www.python.org/.

## Jupyter notebook
Examples in the lecture will be provided as a jupyter notebook.
If may be usefull to install yourself, to be able to run and play with the examples.

First, ensure that you have the latest pip; older versions may have trouble with some dependencies:
```
pip3 install --upgrade pip
```

Then install the Jupyter Notebook using:
```
pip3 install jupyter
```

You can also find these instructions here: https://jupyter.readthedocs.io/en/latest/install.html
