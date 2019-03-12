'''
Example for ORM,
to run do 
pip install SQLAlchemy
pip install pymysql
'''


from sqlalchemy import Table, Column, Integer, String


from sqlalchemy import create_engine
engine = create_engine('mysql+pymysql://course:password@127.0.0.1/example')

from sqlalchemy import MetaData
metadata = MetaData(bind=engine)

# define table
users = Table('users', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(50)),
    Column('age', Integer),
    Column('password', String(12))
)

# create table
users.create()

# create insert statement and execute
i = users.insert()
i.execute(name='Mary', age=32, password='secret')

# select all users with age less than 40 
s = users.select(users.c.age < 40)
rs = s.execute()
print(rs.fetchall())